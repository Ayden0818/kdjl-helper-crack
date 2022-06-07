function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

const mainMenu = 'document.querySelector("body > uni-app > uni-page > uni-page-head > div.uni-page-head > div.uni-page-head-hd > div:nth-child(2) > i")';
const dailyBonus = {
    entry: 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-view.list > uni-view:nth-child(7)")',
    child: {
        feather: 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-label:nth-child(1) > uni-checkbox-group > uni-checkbox > div > div")',
        rune: 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-label:nth-child(2) > uni-checkbox-group > uni-checkbox > div > div")',
        soul: 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-label:nth-child(3) > uni-checkbox-group > uni-checkbox > div > div")',
        key: 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-label:nth-child(4) > uni-checkbox-group > uni-checkbox > div > div")',
        coin: 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-label:nth-child(4) > uni-checkbox-group > uni-checkbox > div > div")',
        confirm: 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-view > uni-button:nth-child(2)")'
    }
}

const skillTraining = 'document.querySelector("body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.mask.show > uni-view > uni-view.list > uni-view:nth-child(8)")'
module.exports = {
    sleep,
    mainMenu,
    dailyBonus,
    skillTraining
};
