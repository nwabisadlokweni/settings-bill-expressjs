const assert = require('assert');
let SettingsBill = require("../settings-bill");

describe("The Settings bill factory function", function () {
    it("should be able to set call cost, sms cost, warning level and critical level", function () {
        let settingsBill = SettingsBill();

        const inputSettings = {
            smsCost: 0.65,
            callCost: 2.55,
            warningLevel: 30,
            criticalLevel: 65
        };

        settingsBill.setSettings(inputSettings);

        const currentSettings = settingsBill.getSettings();

        assert.deepEqual(inputSettings, currentSettings);
    })
});

describe("use values", function () {
    it("should be able to use the call cost set", function () {
        let settingsBill = SettingsBill();

        const inputSettings = {
            smsCost: 0.65,
            callCost: 2.55,
            warningLevel: 30,
            criticalLevel: 65
        };

        settingsBill.setSettings(inputSettings);

        settingsBill.recordAction('call');
        settingsBill.recordAction('call');
        assert.deepEqual(5.1, settingsBill.getTotal("call"));
    })


    it("should be able to use the sms cost set", function () {
        let settingsBill = SettingsBill();

        const inputSettings = {
            smsCost: 0.65,
            callCost: 2.55,
            warningLevel: 30,
            criticalLevel: 65
        };

        settingsBill.setSettings(inputSettings);

        settingsBill.recordAction('sms');
        settingsBill.recordAction('sms');
        assert.deepEqual(1.3, settingsBill.getTotal("sms"));
    })

    it("should be able to use both the sms cost and call cost set", function () {
        let settingsBill = SettingsBill();

        const inputSettings = {
            smsCost: 0.65,
            callCost: 2.55,
            warningLevel: 30,
            criticalLevel: 65
        };

        settingsBill.setSettings(inputSettings);

        settingsBill.recordAction('sms');
        settingsBill.recordAction('sms');
        settingsBill.recordAction("call");
        settingsBill.recordAction("sms");

        assert.deepEqual(4.5, settingsBill.grandTotal("sms", "call"));
    })
});


describe("warning & critical level", function () {
    it("it should return 'warning' if warning level is reached", function () {
        let settingsBill = SettingsBill();

        const inputSettings = {
            smsCost: 0.65,
            callCost: 2.55,
            warningLevel: 10,
            criticalLevel: 65
        };

        settingsBill.setSettings(inputSettings);

        settingsBill.recordAction("sms");
        settingsBill.recordAction("call");
        settingsBill.recordAction("sms");
        settingsBill.recordAction("call");
        settingsBill.recordAction("sms");
        settingsBill.recordAction("call");
        settingsBill.recordAction("sms");

        assert.equal(true, settingsBill.hasReachedWarningLevel("warning"));

    })

    it("it should return 'critical' if critical level is reached", function () {
        let settingsBill = SettingsBill();

        const inputSettings = {
            smsCost: 0.65,
            callCost: 2.55,
            warningLevel: 10,
            criticalLevel: 15
        };

        settingsBill.setSettings(inputSettings);

        settingsBill.recordAction("sms");
        settingsBill.recordAction("call");
        settingsBill.recordAction("sms");
        settingsBill.recordAction("call");
        settingsBill.recordAction("sms");
        settingsBill.recordAction("call");
        settingsBill.recordAction("sms");
        settingsBill.recordAction("call");
        settingsBill.recordAction("call");

        assert.equal(true, settingsBill.hasReachedCriticalLevel("critical"));

    })
});