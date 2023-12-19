package api

import (
	gt "github.com/bas24/googletranslatefree"
	"github.com/gin-gonic/gin"
)

type TextTranslationReqForm struct {
	SourceLang string
	TargetLang string
	Type       string
	Text       string
}

func API_Translate_Text(c *gin.Context) {
	form := TextTranslationReqForm{}
	e := c.BindJSON(&form)
	if e != nil {
		ErrLa(c, e)
	}

	OKLa(c, DoValueRes(1))
}

func translateText(text, sourceLang string, targetLang string) (string, error) {
	if targetLang == "en_US" {
		targetLang = "en"
	}
	if targetLang == "zh_CN" {
		targetLang = "zh-cn"
	}
	if targetLang == "zh_HK" {
		targetLang = "zh-hk"
	}
	return gt.Translate(text, sourceLang, targetLang)
}
