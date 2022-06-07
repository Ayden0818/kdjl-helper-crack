{
    "kill": {
        "ons": {},
        "title": "挂机(暗怪/NPC/彩云)",
        "batch": false,
        "tags": [
            "other"
        ],
        "options": {
            "code": "kill",
            "find": null,
            "stepMax": 0,
            "killMax": 0,
            "findMax": 1,
            "getPet": false,
            "troop": false
        },
        "status": "before",
        "callback": null,
        "resolve": null,
        "reject": null,
        "worker": null
    },
    "ylshd": {
        "ons": {},
        "title": "月亮石活动(持续刷月)",
        "batch": false,
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "挂机地点",
                "type": "picker",
                "range": [
                    {
                        "title": "夜雪宁地 用地、风",
                        "code": "ylshd 101"
                    },
                    {
                        "title": "残月平原 用火、风",
                        "code": "ylshd 102"
                    },
                    {
                        "title": "宁寂之谷 用水",
                        "code": "ylshd 103"
                    }
                ],
                "value": 1
            },
            {
                "title": "爱心处理方式",
                "type": "picker",
                "range": [
                    "奉献爱心",
                    "不处理"
                ],
                "value": 0
            },
            {
                "title": "精魄处理方式",
                "type": "picker",
                "range": [
                    "兑换经验",
                    "兑换材料",
                    "存仓库",
                    "不处理"
                ],
                "value": 1
            },
            {
                "title": "月亮处理方式",
                "type": "picker",
                "range": [
                    "打包",
                    "存仓库",
                    "不处理"
                ],
                "value": 0
            },
            {
                "title": "其他物品存仓",
                "type": "input",
                "placeholder": "多个用|分割",
                "value": ""
            }
        ],
        "before": false
    },
    "mzrq": {
        "ons": {},
        "title": "魔族入侵",
        "batch": false,
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "刷怪模式",
                "type": "picker",
                "range": [
                    "附近模式",
                    "NPC模式"
                ],
                "value": 1
            },
            {
                "title": "回合上限",
                "type": "input",
                "value": "2"
            },
            {
                "title": "超时重试",
                "type": "input",
                "value": "15000"
            },
            {
                "title": "结束存仓",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "item": {
        "ons": {},
        "title": "物品使用(旧)",
        "tags": [
            "item"
        ],
        "options": {
            "item": "",
            "item2": "",
            "use": false,
            "target": "",
            "max": 0
        }
    },
    "item2": {
        "ons": {},
        "title": "物品打开/使用/兑换",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "物品名称",
                "type": "input",
                "placeholder": "必填",
                "focus": true,
                "value": ""
            },
            {
                "title": "目标名称",
                "type": "input",
                "placeholder": "空白/名称/序号",
                "focus": false,
                "value": ""
            }
        ],
        "before": false
    },
    "petsoul": {
        "ons": {},
        "title": "领取灵魂粉末",
        "tags": [
            "event"
        ],
        "before": false
    },
    "day": {
        "ons": {},
        "title": "领取日常奖励",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "领取羽毛",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "抽取符文",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "龙魂进化",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "领取彩云钥匙",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "领彩云水晶币",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "购买灵魂粉末",
                "type": "input",
                "placeholder": "次数",
                "hidden": true,
                "focus": false,
                "value": "0"
            }
        ],
        "before": false
    },
    "jncz": {
        "ons": {},
        "title": "技能成长-天赐天罚",
        "tags": [
            "event"
        ],
        "before": false
    },
    "clear": {
        "ons": {},
        "title": "清理背包",
        "tags": [
            "item"
        ],
        "before": false,
        "resolve": null,
        "reject": null,
        "worker": null,
        "callback": null
    },
    "sava": {
        "ons": {},
        "title": "仓库物品存取",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "操作",
                "type": "picker",
                "range": [
                    "储存物品",
                    "取出物品"
                ],
                "value": 0
            },
            {
                "title": "物品名称",
                "type": "input",
                "placeholder": "多个用|分割",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "jldhk1": {
        "ons": {},
        "title": "精灵学院大会考-答题",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "最小延迟",
                "type": "input",
                "placeholder": "1000",
                "focus": true,
                "value": "1000"
            }
        ],
        "before": false
    },
    "jldhk2": {
        "ons": {},
        "title": "精灵学院大会考-领奖",
        "tags": [
            "event"
        ],
        "before": false
    },
    "lhjl": {
        "ons": {},
        "title": "龙魂进化",
        "tags": [
            "event"
        ],
        "before": false
    },
    "yxzj": {
        "ons": {},
        "title": "英雄之家-智慧试炼",
        "tags": [
            "event"
        ],
        "before": false
    },
    "yxzjother": {
        "ons": {},
        "title": "英雄之家-所有试炼",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "优先级",
                "type": "input",
                "focus": true,
                "value": "法力|防御|速度|攻击|生命"
            }
        ],
        "before": false
    },
    "yxzjday": {
        "ons": {},
        "title": "英雄之家-日常任务",
        "tags": [
            "event"
        ],
        "before": false
    },
    "fjgjcl": {
        "ons": {},
        "title": "分解高级材料",
        "tags": [
            "item"
        ],
        "before": false
    },
    "sccl": {
        "ons": {},
        "title": "生产材料(木材/金属/皮革)",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "类型",
                "type": "picker",
                "range": [
                    "生产木材",
                    "生产金属",
                    "生产皮革"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "jpdh": {
        "ons": {},
        "title": "精魄兑换(经验/材料)",
        "tags": [
            "change"
        ],
        "options": {
            "target": 0
        }
    },
    "dhspcldhb": {
        "ons": {},
        "title": "兑换三品材料兑换包",
        "tags": [
            "change"
        ],
        "before": false
    },
    "leftball": {
        "ons": {},
        "title": "更换生命球",
        "tags": [
            "item"
        ],
        "before": false
    },
    "fxzy": {
        "ons": {},
        "title": "补充飞行之羽",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "忽略领取",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "sycnfh": {
        "ons": {},
        "title": "使用刹那风华(月亮石)",
        "tags": [
            "item"
        ],
        "before": false
    },
    "zzjngjk": {
        "ons": {},
        "title": "生活技能",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "技能名称",
                "type": "picker",
                "range": [
                    "寻找财宝",
                    "采集花束",
                    "神之天眼",
                    "制作技能挂机卡",
                    "带宠大师"
                ],
                "value": 3
            }
        ],
        "before": false
    },
    "syjngjk": {
        "ons": {},
        "title": "使用技能挂机卡",
        "tags": [
            "item"
        ],
        "before": false
    },
    "fxax": {
        "ons": {},
        "title": "奉献爱心",
        "tags": [
            "change"
        ],
        "before": false
    },
    "lqaxlh": {
        "ons": {},
        "title": "领取爱心礼盒",
        "tags": [
            "change"
        ],
        "before": false
    },
    "dhsmlb": {
        "ons": {},
        "title": "兑换神秘礼包",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "奉献爱心",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "领取爱心礼盒",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "打开爱心礼盒",
                "type": "checkbox",
                "value": true
            }
        ],
        "before": false
    },
    "checkpet": {
        "ons": {},
        "title": "检查宠物",
        "tags": [
            "other"
        ],
        "before": false
    },
    "zip": {
        "ons": {},
        "title": "打包物品（100）",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "物品名称",
                "type": "picker",
                "range": [
                    {
                        "title": "荷叶粽子",
                        "code": "~q2"
                    },
                    {
                        "title": "月亮石",
                        "code": "~q5"
                    },
                    {
                        "title": "太阳石",
                        "code": "~q8"
                    },
                    {
                        "title": "虎.字牌",
                        "code": "~q9"
                    },
                    {
                        "title": "打孔器",
                        "code": "~q12"
                    },
                    {
                        "title": "锻皇礼券",
                        "code": "~q15"
                    },
                    {
                        "title": "显影卷轴",
                        "code": "~q23"
                    }
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "ymxjdh": {
        "ons": {},
        "title": "夜梦仙境兑换",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "物品",
                "type": "picker",
                "range": [
                    "活力饮料",
                    "精灵背包"
                ],
                "value": 1
            }
        ],
        "before": false
    },
    "dz": {
        "ons": {},
        "title": "专业锻造",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "装备名称",
                "type": "input",
                "placeholder": "名称",
                "focus": true,
                "value": ""
            },
            {
                "title": "锻造等级",
                "type": "input",
                "placeholder": "数字",
                "focus": false,
                "value": "1"
            },
            {
                "title": "强化材料",
                "type": "picker",
                "range": [
                    "锻造宝石",
                    "精灵锻造宝石",
                    "28级三星石",
                    "轻锻宝石",
                    "精炼宝石"
                ],
                "value": 0
            },
            {
                "title": "自动修复",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "购买锻石",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "dzzb": {
        "ons": {},
        "title": "强化装备(锻造/打潜/打孔)",
        "tags": [
            "item"
        ],
        "options": {
            "itemTitle": "",
            "num": 1,
            "autoBuy": false,
            "type": "",
            "magics": "",
            "addType": "",
            "autoBuyDzbs": false
        }
    },
    "dmdz": {
        "ons": {},
        "title": "磨锻28鞋",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "初始等级",
                "type": "picker",
                "range": [
                    "11",
                    "12",
                    "13",
                    "14"
                ],
                "value": 0
            },
            {
                "title": "磨玉类型",
                "type": "picker",
                "range": [
                    "混合100%",
                    "混合98%",
                    "纯五品72%",
                    "混合12%",
                    "纯五品12%"
                ],
                "value": 0
            },
            {
                "title": "购买锻石",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "磨玉查找",
                "type": "picker",
                "range": [
                    "一页"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "sellbad": {
        "ons": {},
        "title": "出售坏装",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "坏装名称",
                "type": "input",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "cjzstz": {
        "ons": {},
        "title": "参加战神挑战",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "挑战类型",
                "type": "picker",
                "range": [
                    "集结",
                    "峰会",
                    "天骄",
                    "无双",
                    "大帝",
                    "战神",
                    "天下",
                    "独步",
                    "求败"
                ],
                "value": 8
            },
            {
                "title": "挑战级别",
                "type": "picker",
                "range": [
                    "39级",
                    "49级",
                    "59级",
                    "79级",
                    "100级"
                ],
                "value": 4
            }
        ],
        "before": false
    },
    "jlwdbk": {
        "ons": {},
        "title": "精灵王的宝库",
        "batch": false,
        "tags": [
            "event"
        ],
        "options": {}
    },
    "auto7": {
        "ons": {},
        "title": "项链经验兑换银币",
        "tags": [
            "change"
        ],
        "before": false
    },
    "cydh": {
        "ons": {},
        "title": "彩云兑换",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "兑换类型",
                "type": "picker",
                "range": [
                    {
                        "title": "元宝宝箱钥匙",
                        "npc": "1000",
                        "code": "~q1"
                    },
                    {
                        "title": "七棱水晶币",
                        "npc": "1000",
                        "code": "~q2"
                    },
                    {
                        "title": "一天VIP金卡",
                        "npc": "1000",
                        "code": "~q3"
                    },
                    {
                        "title": "彩云全集",
                        "npc": "1001",
                        "code": "~q1"
                    },
                    {
                        "title": "钥匙和水晶币"
                    }
                ],
                "value": 0
            },
            {
                "title": "兑换次数",
                "type": "input",
                "value": 1
            }
        ],
        "before": false
    },
    "cytz": {
        "ons": {},
        "title": "彩云之争",
        "tags": [
            "event"
        ],
        "before": false
    },
    "cwzh": {
        "ons": {},
        "title": "捕捉宠物之魂",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "最高捕捉",
                "type": "picker",
                "range": [
                    "4.崭新的捕捉器",
                    "5.魔力的捕捉器",
                    "6.稀有的捕捉器",
                    "7.史诗的捕捉器"
                ],
                "value": 0
            },
            {
                "title": "持续捕捉",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "jdzl": {
        "ons": {},
        "title": "决斗之路",
        "batch": false,
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "类型",
                "type": "picker",
                "range": [
                    "强行击杀",
                    "快速战斗",
                    "等待被杀"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "zhjfdh": {
        "ons": {},
        "title": "战魂积分兑换",
        "tags": [
            "change"
        ],
        "options": {
            "target": {}
        }
    },
    "sjrw": {
        "ons": {},
        "title": "赏金任务",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "筛选任务",
                "type": "picker",
                "range": [
                    "暗怪",
                    "守护者"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "xrws": {
        "ons": {},
        "title": "仙人无双塔",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "重新挑战",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "自动重置",
                "type": "checkbox",
                "value": true
            }
        ],
        "options": {
            "begin": false
        }
    },
    "xrxl": {
        "ons": {},
        "title": "仙人修炼塔",
        "tags": [
            "event"
        ],
        "before": false
    },
    "talk": {
        "ons": {},
        "title": "定时广播",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "频道",
                "type": "picker",
                "range": [
                    {
                        "title": "同屏",
                        "code": "11"
                    },
                    {
                        "title": "本服",
                        "code": "14"
                    },
                    {
                        "title": "本线",
                        "code": "18"
                    }
                ],
                "value": 0
            },
            {
                "title": "频率(分)",
                "type": "input",
                "value": "5"
            },
            {
                "title": "内容",
                "type": "input",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "cfhbzb": {
        "ons": {},
        "title": "财富花瓣占卜",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "类型",
                "type": "picker",
                "range": [
                    "高级",
                    "终级"
                ],
                "value": 1
            }
        ],
        "before": false
    },
    "zz": {
        "ons": {},
        "title": "飘香粽子",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "挂机类型",
                "type": "picker",
                "range": [
                    "暗怪",
                    "BOSS",
                    "混合"
                ],
                "value": 2
            },
            {
                "title": "爱心处理方式",
                "type": "picker",
                "range": [
                    "奉献爱心",
                    "不处理"
                ],
                "value": 0
            },
            {
                "title": "精魄处理方式",
                "type": "picker",
                "range": [
                    "兑换经验",
                    "兑换材料",
                    "存仓库",
                    "不处理"
                ],
                "value": 1
            }
        ],
        "before": false
    },
    "yuebing": {
        "ons": {},
        "title": "刷月饼",
        "batch": false,
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "挂机类型",
                "type": "picker",
                "range": [
                    "暗怪",
                    "BOSS",
                    "混合"
                ],
                "value": 2
            }
        ],
        "before": false
    },
    "jz": {
        "ons": {},
        "title": "家族任务",
        "tags": [
            "event"
        ],
        "options": {}
    },
    "discard": {
        "ons": {},
        "title": "丢弃物品",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "物品名称",
                "type": "input",
                "placeholder": "多个用|分割",
                "focus": true,
                "value": ""
            }
        ],
        "options": {
            "userAction": true
        }
    },
    "ybzz": {
        "ons": {},
        "title": "佣兵转职",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "任务类型",
                "type": "picker",
                "range": [
                    "普通任务",
                    "高级任务"
                ],
                "value": 0
            },
            {
                "title": "自动重置",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "dbqb": {
        "ons": {},
        "title": "夺宝骑兵",
        "tags": [
            "event"
        ],
        "before": false
    },
    "ybbz": {
        "ons": {},
        "title": "制造佣兵宝珠",
        "tags": [
            "change",
            "item"
        ],
        "form": [
            {
                "title": "宝珠类型",
                "type": "picker",
                "range": [
                    {
                        "title": "普通制造",
                        "code": "vspmk_frist"
                    },
                    {
                        "title": "高级制造",
                        "code": "vspmk_second"
                    },
                    {
                        "title": "强力制造",
                        "code": "vspmk_third"
                    },
                    {
                        "title": "极限制造",
                        "code": "vspmk_fourth"
                    }
                ],
                "value": 0
            },
            {
                "title": "循环制造",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "未爆停止",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "xhbz": {
        "ons": {},
        "title": "销毁佣兵宝珠",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "宝珠名称",
                "type": "input",
                "placeholder": "关键词",
                "focus": true,
                "value": ""
            },
            {
                "title": "数量限制",
                "type": "input",
                "value": "10"
            }
        ],
        "before": false
    },
    "ylsdh": {
        "ons": {},
        "title": "月亮石兑换经验",
        "tags": [
            "event",
            "change"
        ],
        "before": false
    },
    "autod": {
        "ons": {},
        "title": "动他一下",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "完整昵称",
                "type": "input",
                "focus": true,
                "value": ""
            },
            {
                "title": "类型",
                "type": "picker",
                "range": [
                    "动他一下",
                    "爱抚"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "kill2": {
        "ons": {},
        "title": "挂机存物品",
        "batch": false,
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "挂机目标",
                "type": "picker",
                "range": [],
                "value": 0
            },
            {
                "title": "仓库存储",
                "type": "picker",
                "range": [
                    "任务材料",
                    "其他物品"
                ],
                "value": 0
            },
            {
                "title": "其他物品",
                "type": "input",
                "placeholder": "多个用|分割",
                "value": ""
            }
        ]
    },
    "dzyxjz": {
        "ons": {},
        "title": "银币强化英雄之戒",
        "tags": [
            "other"
        ],
        "before": false
    },
    "sd": {
        "ons": {},
        "title": "锻造宝石圣锻",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "装备名称",
                "type": "input",
                "focus": true,
                "value": ""
            },
            {
                "title": "最大次数",
                "type": "input",
                "value": 6
            }
        ],
        "before": false
    },
    "tjxt": {
        "ons": {},
        "title": "交许愿雪团",
        "tags": [
            "change"
        ],
        "before": false
    },
    "xygd": {
        "ons": {},
        "title": "雪域国度(持续刷雪团)",
        "batch": false,
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "目标",
                "type": "picker",
                "range": [
                    {
                        "title": "巨型雪人",
                        "code": "npc 1001 h"
                    },
                    {
                        "title": "雪灵蛟龙",
                        "code": "npc 1000 h"
                    }
                ],
                "value": 0
            },
            {
                "title": "混合暗怪",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "精魄处理",
                "type": "picker",
                "range": [
                    "兑换经验",
                    "兑换材料"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "myxj": {
        "ons": {},
        "title": "梦游仙境(刷点心)",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "类型",
                "type": "picker",
                "range": [
                    "中级",
                    "终级",
                    "中级和终级(自动重置)"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "jzwz": {
        "ons": {},
        "title": "家族物资兑换",
        "tags": [
            "change"
        ],
        "options": {
            "targetItem": {}
        }
    },
    "buytb": {
        "ons": {},
        "title": "购买团宝",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "购买数量",
                "type": "input",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "ybxl": {
        "ons": {},
        "title": "佣兵修炼(灵魂进化)",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "佣兵",
                "type": "input",
                "placeholder": "名称或序号",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "xsch": {
        "ons": {},
        "title": "牺牲全部宠物之魂",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "宠物",
                "type": "input",
                "placeholder": "名称/序号",
                "focus": true,
                "value": ""
            },
            {
                "title": "宠魂",
                "type": "input",
                "placeholder": "名称/序号",
                "focus": false,
                "value": ""
            }
        ],
        "before": false
    },
    "sendItem": {
        "ons": {},
        "title": "物品给人",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "物品",
                "type": "input",
                "placeholder": "名称",
                "focus": true,
                "value": ""
            },
            {
                "title": "用户",
                "type": "input",
                "placeholder": "名称/序号",
                "focus": false,
                "value": ""
            },
            {
                "title": "数量限制",
                "type": "input",
                "placeholder": "适用于不可叠加类",
                "focus": false,
                "value": ""
            }
        ],
        "before": false
    },
    "update": {
        "ons": {},
        "title": "飞到区域",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "地图码",
                "type": "input",
                "placeholder": "",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "lsj4": {
        "ons": {},
        "title": "黎明黄昏换4品书",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "类型",
                "type": "picker",
                "range": [
                    "弱宠区",
                    "强宠区",
                    "弱道具区",
                    "强道具区"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "yzzx": {
        "ons": {},
        "title": "勇者之心兑换道具",
        "tags": [
            "change"
        ],
        "options": {}
    },
    "bx": {
        "ons": {},
        "title": "搜索区域宝箱",
        "tags": [
            "other"
        ],
        "before": false
    },
    "zx": {
        "ons": {},
        "title": "主线任务",
        "tags": [
            "other"
        ],
        "before": false
    },
    "killUser": {
        "ons": {},
        "title": "强行击杀",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "输入昵称",
                "type": "input",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "jlwxs": {
        "ons": {},
        "title": "精灵王星石",
        "tags": [
            "event"
        ],
        "before": false
    },
    "cwjh": {
        "ons": {},
        "title": "宠物进化",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "宠物名称",
                "type": "input",
                "placeholder": "",
                "focus": true,
                "value": ""
            },
            {
                "title": "进化类型",
                "type": "picker",
                "range": [
                    "魂品",
                    "神品",
                    "五品"
                ],
                "value": 0
            },
            {
                "title": "修炼类型",
                "type": "picker",
                "range": [
                    "自动",
                    "神品"
                ],
                "value": 0
            },
            {
                "title": "自动补充",
                "type": "picker",
                "range": [
                    "商店购买"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "jzhz": {
        "ons": {},
        "title": "魔界兑换徽章",
        "tags": [
            "change"
        ],
        "before": false
    },
    "cbmg": {
        "ons": {},
        "title": "藏宝迷宫",
        "tags": [
            "event"
        ],
        "before": false
    },
    "autobuy": {
        "ons": {},
        "title": "购买摆摊物品",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "摊主名称",
                "type": "input",
                "placeholder": "",
                "focus": true,
                "value": ""
            },
            {
                "title": "物品名称",
                "type": "input",
                "placeholder": "",
                "value": ""
            },
            {
                "title": "购买数量",
                "type": "input",
                "placeholder": "",
                "value": ""
            }
        ],
        "before": false
    },
    "dhzz": {
        "ons": {},
        "title": "兑换神奇宠种",
        "tags": [
            "change"
        ],
        "before": false
    },
    "tzhajl": {
        "ons": {},
        "title": "挑战黑暗精灵",
        "tags": [
            "event"
        ],
        "before": false
    },
    "dddth": {
        "ons": {},
        "title": "颠倒的童话",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "任务类型",
                "type": "picker",
                "range": [
                    {
                        "title": "普通",
                        "code": ""
                    },
                    {
                        "title": "困难",
                        "code": ""
                    },
                    {
                        "title": "噩梦",
                        "code": ""
                    }
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "zbfj": {
        "ons": {},
        "title": "装备分解",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "装备名称",
                "type": "input",
                "placeholder": "",
                "value": ""
            }
        ],
        "before": false
    },
    "checkcode": {
        "ons": {},
        "title": "识别验证码",
        "tags": [
            "other"
        ],
        "before": false
    },
    "mxrw": {
        "ons": {},
        "title": "支线任务",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "冒险任务",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "探索宝箱",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "其他任务",
                "type": "checkbox",
                "value": true
            }
        ],
        "before": false
    },
    "swdh": {
        "ons": {},
        "title": "声望兑换道具",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "道具名称",
                "type": "input",
                "placeholder": "道具名称",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "qfjjc": {
        "ons": {},
        "title": "全服竞技场",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "对手",
                "type": "input",
                "placeholder": "名称/序号",
                "focus": true,
                "value": ""
            }
        ],
        "before": false
    },
    "xfjl": {
        "ons": {},
        "title": "领取消费奖励",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "神迹三星石",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "宠物启魂书",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "修复宝石",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "b2p": {
        "ons": {},
        "title": "元宝创建银票",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "单张金额",
                "type": "input",
                "placeholder": "",
                "focus": true,
                "value": "1"
            },
            {
                "title": "创建张数",
                "type": "input",
                "placeholder": "",
                "focus": true,
                "value": "1"
            }
        ],
        "before": false
    },
    "p2b": {
        "ons": {},
        "title": "银票兑换元宝",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "次数限制",
                "type": "input",
                "placeholder": "默认不限",
                "focus": true,
                "value": "999"
            }
        ],
        "before": false
    },
    "cwdm": {
        "ons": {},
        "title": "资质宝石打磨",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "宠物名称",
                "type": "input",
                "placeholder": "",
                "focus": true,
                "value": ""
            },
            {
                "title": "打磨属性",
                "type": "picker",
                "range": [
                    "致命",
                    "精力",
                    "速度",
                    "抗混",
                    "抗睡",
                    "抗封",
                    "抗诅",
                    "抗麻"
                ],
                "value": 0
            },
            {
                "title": "自动锁定",
                "type": "picker",
                "range": [
                    "是"
                ],
                "value": 0
            },
            {
                "title": "持续打磨",
                "type": "picker",
                "range": [
                    "是"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "jzxl": {
        "ons": {},
        "title": "家族修炼(老区)",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "修炼类型",
                "type": "picker",
                "range": [
                    "灵能术",
                    "防护术",
                    "巨力术",
                    "厚皮术"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "smy": {
        "ons": {},
        "title": "刷磨玉镶嵌石",
        "batch": false,
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "挂机NPC",
                "type": "picker",
                "range": [
                    {
                        "title": "邪恶意志",
                        "code": "npc 1000"
                    },
                    {
                        "title": "邪恶灵魂",
                        "code": "npc 1001"
                    }
                ],
                "value": 1
            },
            {
                "title": "爱心处理方式",
                "type": "picker",
                "range": [
                    "奉献爱心",
                    "不处理"
                ],
                "value": 0
            },
            {
                "title": "精魄处理方式",
                "type": "picker",
                "range": [
                    "兑换经验",
                    "兑换材料",
                    "存仓库",
                    "不处理"
                ],
                "value": 1
            },
            {
                "title": "自动丢弃",
                "type": "input",
                "placeholder": "多个用|分割",
                "value": "小卖部银会员卡|飞行之羽"
            },
            {
                "title": "物品存仓",
                "type": "input",
                "placeholder": "多个用|分割",
                "value": "磨玉镶嵌石"
            }
        ],
        "before": false
    },
    "yetu": {
        "ons": {},
        "title": "夜兔王的进攻",
        "tags": [
            "event"
        ],
        "before": false
    },
    "jzgc": {
        "ons": {},
        "title": "家族功臣兑换",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "挂机地点",
                "type": "picker",
                "range": [
                    "神兽召唤卷轴",
                    "魂宠召唤卷轴",
                    "魂品.宠物进化书",
                    "魂品.宠物经验书"
                ],
                "value": 2
            },
            {
                "title": "兑换次数",
                "type": "input",
                "placeholder": "",
                "value": "9999"
            }
        ],
        "before": false
    },
    "hjha": {
        "ons": {},
        "title": "黄金海岸",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "奖品选择",
                "type": "picker",
                "range": [
                    "装备潜力",
                    "装备潜力(绑)",
                    "宠物养成点数",
                    "宠物养成点数(绑)"
                ],
                "value": 0
            }
        ],
        "before": false
    },
    "psdhy": {
        "ons": {},
        "title": "潘神的花园",
        "tags": [
            "event"
        ],
        "form": [
            {
                "title": "兑换任务",
                "type": "input",
                "placeholder": "龙腾虎跃",
                "value": ""
            }
        ],
        "before": false
    },
    "ksbx": {
        "ons": {},
        "title": "快速补血",
        "tags": [
            "other"
        ],
        "before": false
    },
    "ybxunlian": {
        "ons": {},
        "title": "佣兵训练",
        "tags": [
            "event"
        ],
        "before": false
    },
    "baitan": {
        "ons": {},
        "title": "摆摊",
        "tags": [
            "item"
        ],
        "form": [
            {
                "title": "物品清单",
                "type": "input",
                "placeholder": "名称:价格|名称:价格",
                "value": ""
            },
            {
                "title": "覆盖原价",
                "type": "checkbox",
                "value": false
            },
            {
                "title": "等待摊位",
                "type": "checkbox",
                "value": true
            }
        ],
        "options": {
            "frist": true
        }
    },
    "jiazu": {
        "ons": {},
        "title": "加入家族",
        "tags": [
            "other"
        ],
        "form": [
            {
                "title": "家族名称",
                "type": "input",
                "focus": true,
                "value": ""
            },
            {
                "title": "模糊搜索",
                "type": "checkbox",
                "value": false
            }
        ],
        "before": false
    },
    "dhxt": {
        "ons": {},
        "title": "兑换雪团",
        "tags": [
            "change"
        ],
        "form": [
            {
                "title": "一品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "二品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "三品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "四品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "五品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "神品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "魂品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "圣品",
                "type": "checkbox",
                "value": true
            },
            {
                "title": "兑换次数",
                "type": "input",
                "value": "1"
            }
        ],
        "before": false
    }
}