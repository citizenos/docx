export declare function DefaultStyle(): {
    "w:styles": ({
        _attr: {
            "xmlns:mc": string;
            "xmlns:r": string;
            "xmlns:w": string;
            "xmlns:w14": string;
            "xmlns:w15": string;
            "mc:Ignorable": string;
        };
    } | {
        "w:docDefaults": ({
            "w:rPrDefault": {
                "w:rPr": ({
                    "w:rFonts": {
                        _attr: {
                            "w:asciiTheme": string;
                            "w:eastAsiaTheme": string;
                            "w:hAnsiTheme": string;
                            "w:cstheme": string;
                        };
                    }[];
                } | {
                    "w:sz": {
                        _attr: {
                            "w:val": string;
                        };
                    }[];
                } | {
                    "w:szCs": {
                        _attr: {
                            "w:val": string;
                        };
                    }[];
                } | {
                    "w:lang": {
                        _attr: {
                            "w:val": string;
                            "w:eastAsia": string;
                            "w:bidi": string;
                        };
                    }[];
                })[];
            }[];
        } | {
            "w:pPrDefault": {
                "w:pPr": {
                    "w:spacing": {
                        _attr: {
                            "w:after": string;
                            "w:line": string;
                            "w:lineRule": string;
                        };
                    }[];
                }[];
            }[];
        })[];
    } | {
        "w:latentStyles": ({
            _attr: {
                "w:defLockedState": string;
                "w:defUIPriority": string;
                "w:defSemiHidden": string;
                "w:defUnhideWhenUsed": string;
                "w:defQFormat": string;
                "w:count": string;
            };
        } | {
            "w:lsdException": {
                _attr: {
                    "w:name": any;
                    "w:uiPriority": any;
                    "w:qFormat": any;
                    "w:semiHidden": any;
                    "w:unhideWhenUsed": any;
                };
            }[];
        })[];
    })[];
};
