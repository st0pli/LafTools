// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf 
// Description: 
// Copyright (C) 2024 - Present, https://laf-tools.com and https://codegen.cc
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
import Adler32Checksum from "../../operations/Adler32Checksum.mjs";
import AnalyseHash from "../../operations/AnalyseHash.mjs";
// import Argon2 from "../../operations/Argon2.mjs";
// import Argon2Compare from "../../operations/Argon2Compare.mjs";
import Bcrypt from "../../operations/Bcrypt.mjs";
import BcryptCompare from "../../operations/BcryptCompare.mjs";
import BcryptParse from "../../operations/BcryptParse.mjs";
import CMAC from "../../operations/CMAC.mjs";
import CRC16Checksum from "../../operations/CRC16Checksum.mjs";
import CRC32Checksum from "../../operations/CRC32Checksum.mjs";
import CRC8Checksum from "../../operations/CRC8Checksum.mjs";
import CTPH from "../../operations/CTPH.mjs";
import CipherSaber2Decrypt from "../../operations/CipherSaber2Decrypt.mjs";
import CipherSaber2Encrypt from "../../operations/CipherSaber2Encrypt.mjs";
import CompareCTPHHashes from "../../operations/CompareCTPHHashes.mjs";
import CompareSSDEEPHashes from "../../operations/CompareSSDEEPHashes.mjs";
import DeriveHKDFKey from "../../operations/DeriveHKDFKey.mjs";
import Fletcher16Checksum from "../../operations/Fletcher16Checksum.mjs";
import Fletcher32Checksum from "../../operations/Fletcher32Checksum.mjs";
import Fletcher64Checksum from "../../operations/Fletcher64Checksum.mjs";
import Fletcher8Checksum from "../../operations/Fletcher8Checksum.mjs";
import GenerateAllHashes from "../../operations/GenerateAllHashes.mjs";
import GenerateUUID from "../../operations/GenerateUUID.mjs";
import HAS160 from "../../operations/HAS160.mjs";
import HASSHClientFingerprint from "../../operations/HASSHClientFingerprint.mjs";
import HASSHServerFingerprint from "../../operations/HASSHServerFingerprint.mjs";
import HMAC from "../../operations/HMAC.mjs";
import JA3Fingerprint from "../../operations/JA3Fingerprint.mjs";
import JA3SFingerprint from "../../operations/JA3SFingerprint.mjs";
import JWTDecode from "../../operations/JWTDecode.mjs";
import JWTSign from "../../operations/JWTSign.mjs";
import JWTVerify from "../../operations/JWTVerify.mjs";
import Keccak from "../../operations/Keccak.mjs";
import LMHash from "../../operations/LMHash.mjs";
import LS47Decrypt from "../../operations/LS47Decrypt.mjs";
import LS47Encrypt from "../../operations/LS47Encrypt.mjs";
import MD2 from "../../operations/MD2.mjs";
import MD4 from "../../operations/MD4.mjs";
import MD5 from "../../operations/MD5.mjs";
import MD6 from "../../operations/MD6.mjs";
import NTHash from "../../operations/NTHash.mjs";
import RIPEMD from "../../operations/RIPEMD.mjs";
import SHA0 from "../../operations/SHA0.mjs";
import SHA1 from "../../operations/SHA1.mjs";
import SHA2 from "../../operations/SHA2.mjs";
import SHA3 from "../../operations/SHA3.mjs";
import SM3 from "../../operations/SM3.mjs";
import SSDEEP from "../../operations/SSDEEP.mjs";
import Scrypt from "../../operations/Scrypt.mjs";
import Shake from "../../operations/Shake.mjs";
import Snefru from "../../operations/Snefru.mjs";
import TCPIPChecksum from "../../operations/TCPIPChecksum.mjs";
import Whirlpool from "../../operations/Whirlpool.mjs";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Crypto = {
    "Adler-32 Checksum": Adler32Checksum,
    "Analyse hash": AnalyseHash,
    // "Argon2": Argon2,
    // "Argon2 compare": Argon2Compare,
    "Bcrypt": Bcrypt,
    "Bcrypt compare": BcryptCompare,
    "Bcrypt parse": BcryptParse,
    "CMAC": CMAC,
    "CRC-16 Checksum": CRC16Checksum,
    "CRC-32 Checksum": CRC32Checksum,
    "CRC-8 Checksum": CRC8Checksum,
    "CTPH": CTPH,
    "CipherSaber2 Decrypt": CipherSaber2Decrypt,
    "CipherSaber2 Encrypt": CipherSaber2Encrypt,
    "Compare CTPH hashes": CompareCTPHHashes,
    "Compare SSDEEP hashes": CompareSSDEEPHashes,
    "Derive HKDF key": DeriveHKDFKey,
    "Fletcher-16 Checksum": Fletcher16Checksum,
    "Fletcher-32 Checksum": Fletcher32Checksum,
    "Fletcher-64 Checksum": Fletcher64Checksum,
    "Fletcher-8 Checksum": Fletcher8Checksum,
    "Generate all hashes": GenerateAllHashes,
    "Generate UUID": GenerateUUID,
    "HAS-160": HAS160,
    "HASSH Client Fingerprint": HASSHClientFingerprint,
    "HASSH Server Fingerprint": HASSHServerFingerprint,
    "HMAC": HMAC,
    "JA3 Fingerprint": JA3Fingerprint,
    "JA3S Fingerprint": JA3SFingerprint,
    "JWT Decode": JWTDecode,
    "JWT Sign": JWTSign,
    "JWT Verify": JWTVerify,
    "Keccak": Keccak,
    "LM Hash": LMHash,
    "LS47 Decrypt": LS47Decrypt,
    "LS47 Encrypt": LS47Encrypt,
    "MD2": MD2,
    "MD4": MD4,
    "MD5": MD5,
    "MD6": MD6,
    "NT Hash": NTHash,
    "RIPEMD": RIPEMD,
    "SHA0": SHA0,
    "SHA1": SHA1,
    "SHA2": SHA2,
    "SHA3": SHA3,
    "SM3": SM3,
    "SSDEEP": SSDEEP,
    "Scrypt": Scrypt,
    "Shake": Shake,
    "Snefru": Snefru,
    "TCP/IP Checksum": TCPIPChecksum,
    "Whirlpool": Whirlpool,
};

export default OpModules;
