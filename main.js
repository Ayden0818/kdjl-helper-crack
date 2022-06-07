const { app, BrowserWindow, Menu, webContents } = require('electron');
const { syncBuiltinESMExports } = require('module');
// const schedule = require('node-schedule');
const path = require('path');
// const textfile = require('textfile')
// const { sleep, mainMenu, dailyBonus } = require('./targets')
const isMac = process.platform === 'darwin'
const isDev = process.env.npm_package_name
// const isDev = true;

function createWindow() {
    let win = new BrowserWindow({
        width: 320,
        height: 568,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
            backgroundThrottling: false,
            icon: path.join(__dirname, 'build/hacker.png')
        }
    })
    win.loadURL(path.join(__dirname, 'index.html'));
    // win.loadURL("https://i-weather.cn/kdjl-helper/");
    
    // win.loadFile('index.html');
    // win.webContents.on('did-finish-load', () => {
    //     const execute = (code) => {
    //         win.webContents.executeJavaScript(code);
    //         sleep(1000);
    //     };
    //     // 每天1点钟执行 0 0 1 * * * 
    //     schedule.scheduleJob('0 0 1 * * *', () => {
    //         win.webContents.executeJavaScript(`kdjl.status===2&&getCurrentPages()[0].tasking`).then((result) => {
    //             if (result === 2) {
    //                 execute(`${mainMenu}.click()`);
    //                 execute(`${dailyBonus.entry}.click()`);
    //                 // execute(`${dailyBonus.child.feather}.className.indexOf('checked')<0&&${dailyBonus.child.feather}.click()`);
    //                 // execute(`${dailyBonus.child.rune}.className.indexOf('checked')<0&&${dailyBonus.child.rune}.click()`);
    //                 // execute(`${dailyBonus.child.soul}.className.indexOf('checked')<0&&${dailyBonus.child.soul}.click()`);
    //                 // execute(`${dailyBonus.child.key}.className.indexOf('checked')>0&&${dailyBonus.child.key}.click()`);
    //                 // execute(`${dailyBonus.child.coin}.className.indexOf('checked')>0&&${dailyBonus.child.coin}.click()`);
    //                 execute(`${dailyBonus.child.confirm}.click()`);
    //             }
    //         })
    //     });
    //     // 每天2点钟执行 0 0 1 * * * 
    //     schedule.scheduleJob('0 0 2 * * *', () => {
    //         win.webContents.executeJavaScript(`kdjl.status`).then((result) => {
    //             if (result === 2) {
    //                 execute(`${mainMenu}.click()`);
    //                 execute(`${dailyBonus.entry}.click()`);
    //                 execute(`${dailyBonus.child.confirm}.click()`);
    //             }
    //         })
    //     });

    // });
}

const template = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            {
                role: 'about',
                label: '关于'
            },
            { type: 'separator' },
            // { role: 'services' },
            // { type: 'separator' },
            {
                role: 'hide',
                label: '隐藏'
            },
            {
                role: 'hideothers',
                label: '隐藏其他'
            },
            {
                role: 'unhide',
                label: '取消隐藏'
            },
            { type: 'separator' },
            {
                role: 'quit',
                label: '退出'
            }
        ]
    }] : []),
    {
        label: '文件',
        submenu: [
            {
                label: '新建窗口',
                click: createWindow
            },
            isMac ? {
                role: 'close',
                label: '关闭'
            } : {
                role: 'quit',
                label: '退出'
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                role: 'undo',
                label: '撤销'
            },
            {
                role: 'redo',
                label: '重做'
            },
            { type: 'separator' },
            {
                role: 'cut',
                label: '剪切'
            },
            {
                role: 'copy',
                label: '复制'
            },
            {
                role: 'paste',
                label: '粘贴'
            },
            ...(isMac ? [
                // { role: 'pasteAndMatchStyle' },
                {
                    role: 'delete',
                    label: '删除'
                },
                {
                    role: 'selectAll',
                    label: '全选'
                },
                { type: 'separator' },
                {
                    label: 'Speech',
                    label: '语音',
                    submenu: [
                        {
                            role: 'startspeaking',
                            label: '开始语音'
                        },
                        {
                            role: 'stopspeaking',
                            label: '停止语音'
                        }
                    ]
                }
            ] : [
                {
                    role: 'delete',
                    label: '删除'
                },
                { type: 'separator' },
                {
                    role: 'selectAll',
                    label: '全选'
                }
            ])
        ]
    },
    {
        label: '视图',
        submenu: [
            {
                role: 'reload',
                label: '重新加载'
            },
            {
                role: 'forcereload',
                label: '强制重载'
            },
            ...(isDev ? [{
                role: 'toggledevtools',
                label: '切换调试'
            }, { type: 'separator' }] : [{ type: 'separator' }]),
            {
                role: 'resetzoom',
                label: '重置缩放'
            },
            {
                role: 'zoomin',
                label: '放大'
            },
            {
                role: 'zoomout',
                label: '缩小'
            },
            { type: 'separator' },
            {
                role: 'togglefullscreen',
                label: '切换全屏'
            }
        ]
    },
    {
        label: '窗口',
        submenu: [
            {
                role: 'minimize',
                label: '最小化'
            },
            {
                role: 'zoom',
                label: '缩放'
            },
            ...(isMac ? [
                // { type: 'separator' },
                // {
                //     role: 'front'
                // },
                // { type: 'separator' },
                {
                    role: 'window',
                    label: '窗口'
                }
            ] : [
                {
                    role: 'close',
                    label: '关闭'
                }
            ])
        ]
    },
    {
        role: 'help',
        label: '帮助',
        submenu: [
            {
                label: '更多帮助',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://i-weather.cn')
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.on('ready', createWindow)