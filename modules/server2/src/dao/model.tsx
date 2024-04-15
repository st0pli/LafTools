import {
    Sequelize, DataTypes, Model, InferCreationAttributes, InferAttributes, CreationOptional
} from 'sequelize';
import { DaoRef } from './index'
import { isDevEnv } from '../hooks/env';


// chat group, chat group members, chat group history



// model for chat group
export class ChatGroup extends Model<InferAttributes<ChatGroup>, InferCreationAttributes<ChatGroup>> {
    declare id?: number;
    declare name: string;
    declare totalMsgCount: number;
    declare firstMessageAt?: Date;
    declare lastMessageAt?: Date;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for chat group members 
export class ChatGroupUser extends Model<InferAttributes<ChatGroupUser>, InferCreationAttributes<ChatGroupUser>> {
    declare id?: number;
    declare wxUserId?: string;
    declare wxUserAlias: string;
    declare wxNickName: string;
    declare msgCount: number;
    declare firstMessageAt?: Date;
    declare lastMessageAt?: Date;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class ChatGroupAliasMap extends Model<InferAttributes<ChatGroupAliasMap>, InferCreationAttributes<ChatGroupAliasMap>> {
    declare id?: number;
    declare groupUserId: number;
    declare groupAlias: string;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for chat group history
export class ChatGroupHistory extends Model<InferAttributes<ChatGroupHistory>, InferCreationAttributes<ChatGroupHistory>> {
    declare id?: number;
    declare groupId: number;
    declare groupUserId: number;
    declare type: string; // 10000 or other types
    declare content: string;
    declare sentTime: Date;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

export class RawWXContact extends Model<InferAttributes<RawWXContact>, InferCreationAttributes<RawWXContact>> {
    declare id: number;
    declare groupKey: string;

    declare UserName: string;
    declare Alias: string;
    declare EncryptUserName: string;
    declare DelFlag: number;
    declare Type: number;
    declare VerifyFlag: number;
    declare Reserved1: number;
    declare Reserved2: number;
    declare Reserved3: string;
    declare Reserved4: string;
    declare Remark: string;
    declare NickName: string;
    declare LabelIDList: string;
    declare DomainList: string;
    declare ChatRoomType: number;
    declare PYInitial: string;
    declare QuanPin: string;
    declare RemarkPYInitial: string;
    declare RemarkQuanPin: string;
    declare BigHeadImgUrl: string;

}

export class RawFTSChatroom extends Model<InferAttributes<RawFTSChatroom>, InferCreationAttributes<RawFTSChatroom>> {
    declare docid: number;
    declare groupKey: string;
    declare c0groupRemark: string;
    declare c1nickname: string;
    declare c2alias: string;
}

export class RawGroupHistory extends Model<InferAttributes<RawGroupHistory>, InferCreationAttributes<RawGroupHistory>> {
    // localId,TalkerId,Type,SubType,IsSender,CreateTime,Status,StrContent,StrTime,Remark,NickName,Sender
    declare id: number;
    declare groupKey: string;
    declare groupName: string;
    declare localId: string;
    declare talkerId: string;
    declare type: string;
    declare subType: string;
    declare isSender: string;
    declare createTime: string;
    declare status: string;
    declare strContent: string;
    declare strTime: string;
    declare remark: string;
    declare nickName: string;
    declare sender: string;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}



// system forum

export type UserRole = "webmaster" | "moderator" | "user"

// model for UserLoginLog
export class UserLoginLog extends Model<InferAttributes<UserLoginLog>, InferCreationAttributes<UserLoginLog>> {
    declare id?: number;
    declare userId: number;
    declare loginIp: string;
    declare loginTime: Date;
}

// model for block amongst users
export class Block extends Model<InferAttributes<Block>, InferCreationAttributes<Block>> {
    declare id: number;
    declare userId: number;
    declare blockUserId: number;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for topic, containing title, userid, nodeid
export class Topic extends Model<InferAttributes<Topic>, InferCreationAttributes<Topic>> {
    declare id: number;
    declare title: string; // varchar(120)
    declare userId: string;
    declare nodeId: string; // varchar(15)
    declare viewCount: number;
    declare favouriteCount: number;
    declare commentCount: number;
    declare lastCommenter: number;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for topic content, including topicId, type, content(varchar(200))
export class TopicContent extends Model<InferAttributes<TopicContent>, InferCreationAttributes<TopicContent>> {
    declare id: number;
    declare topicId: number;
    declare publishType: "main" | "append";
    declare renderType: "markdown" | "lexical";
    declare content: string; // varchar(20000)
    declare editTimes: number;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for topic comments, including topicId, userId, content
export class TopicComment extends Model<InferAttributes<TopicComment>, InferCreationAttributes<TopicComment>> {
    declare id: number;
    declare topicId: number;
    declare userId: number;
    declare content: string; // varchar(20000)
    declare editTimes: number;
    declare agreeCount: number; // agree with this comment, visible
    declare disagreeCount: number; // disagree with this comment, invisible
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for audit table, can contains history of topic content and topic comment model
export type AuditType = "editTopicContent" | "editTopicComment" | "changeUserName"
export class Audit extends Model<InferAttributes<Audit>, InferCreationAttributes<Audit>> {
    declare id: number;
    declare userId: number;
    declare type: AuditType;
    declare content: string; // varchar(20000)
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}


export default async (daoRef: DaoRef) => {
    let sequelize = daoRef.db

    // options
    // await sequelize.sync({ alter: true, force: false })

}