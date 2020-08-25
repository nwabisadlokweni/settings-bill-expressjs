const assert = require('assert');
let SettingsBill = require("../settingsBill");

describe("The bill with settings factory function", function () {
    it("should be able to set call cost", function () {
        let settingsBill = SettingsBill();

        settingsBill.setSettings(1.85);
        assert.equal(1.85, settingsBill.getSettings());

        let settingsBill2 = setSettings();
        settingsBill2.setSettings(2.75);
        assert.equal(2.75, settingsBill2.getSettings());
    })


    //     it("should be able to set sms cost", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setSmsCost(0.85);
    //         assert.equal(0.85, settingsBill.getSmsCost());

    //         let settingsBill2 = SettingsBill();
    //         settingsBill2.setSmsCost(0.75);
    //         assert.equal(0.75, settingsBill2.getSmsCost());
    //     })



    //     it("should be able to set sms and call cost", function () {
    //         let settingsBill = SettingsBill();

    //         // settingsBill.getCallCost(2.75);
    //         // settingsBill.getSmsCost(0.85);

    //         settingsBill.setSmsCost(0.85);
    //         settingsBill.setCallCost(2.75);


    //         assert.equal(0.85, settingsBill.getSmsCost());
    //         assert.equal(2.75, settingsBill.getCallCost());

    //         let settingsBill2 = SettingsBill();

    //         settingsBill2.setCallCost(1.75);
    //         settingsBill2.setSmsCost(0.65);

    //         assert.equal(1.75, settingsBill2.getCallCost());
    //         assert.equal(0.65, settingsBill2.getSmsCost());

    //     })



    //     it("should be able to set warning level", function () {

    //         let settingsBill = SettingsBill();

    //         settingsBill.setWarningLevel(20);

    //         assert.equal(20, settingsBill.getWarningLevel());

    //     })


    //     it("should be able to set critical level", function () {

    //         let settingsBill = SettingsBill();

    //         settingsBill.setCriticalLevel(30);

    //         assert.equal(30, settingsBill.getCriticalLevel());

    //     })



    //     it("should be able to set warning and critical level", function () {

    //         let settingsBill = SettingsBill();

    //         settingsBill.setWarningLevel(15);
    //         settingsBill.setCriticalLevel(25);

    //         assert.equal(15, settingsBill.getWarningLevel());
    //         assert.equal(25, settingsBill.getCriticalLevel());

    //     })

    // });





    // describe("use values", function () {
    //     it("should be able to use the call cost set", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCriticalLevel(10);
    //         settingsBill.setCallCost(2.25);
    //         settingsBill.setSmsCost(0.85);

    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();

    //         assert.equal(6.75, settingsBill.getTotalCost());
    //         assert.equal(6.75, settingsBill.getTotalCallCost());
    //         assert.equal(0.00, settingsBill.getTotalSmsCost());
    //     });


    //     it("should be able to use the call cost set for 2 calls at 1.35 each", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCriticalLevel(10);
    //         settingsBill.setCallCost(1.35);
    //         settingsBill.setSmsCost(0.85);

    //         settingsBill.makeCall();
    //         settingsBill.makeCall();

    //         assert.equal(2.70, settingsBill.getTotalCost());
    //         assert.equal(2.70, settingsBill.getTotalCallCost());
    //         assert.equal(0.00, settingsBill.getTotalSmsCost());
    //     });

    //     it("should be able to send 2 sms's at 0.85 each", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCallCost(1.35);
    //         settingsBill.setSmsCost(0.85);
    //         settingsBill.setCriticalLevel(10);

    //         settingsBill.sendSms();
    //         settingsBill.sendSms();

    //         assert.equal(1.70, settingsBill.getTotalCost());
    //         assert.equal(0.00, settingsBill.getTotalCallCost());
    //         assert.equal(1.70, settingsBill.getTotalSmsCost());
    //     });

    //     it("should be able to send 2 sms's at 0.85 each & make 1 call at 1.35", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCallCost(1.35);
    //         settingsBill.setSmsCost(0.85);
    //         settingsBill.setWarningLevel(5);
    //         settingsBill.setCriticalLevel(10);

    //         settingsBill.sendSms();
    //         settingsBill.makeCall();
    //         settingsBill.sendSms();

    //         assert.equal(3.05, settingsBill.getTotalCost());
    //         assert.equal(1.35, settingsBill.getTotalCallCost());
    //         assert.equal(1.70, settingsBill.getTotalSmsCost());
    //     });

    // });



    // describe("warning & critical level", function () {

    //     it("it should return a class name of 'warning' if warning level is reached", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCallCost(1.35);
    //         settingsBill.setSmsCost(0.85);
    //         settingsBill.setWarningLevel(5);
    //         settingsBill.setCriticalLevel(10);

    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         assert.equal("warning", settingsBill.totalClassName());

    //     });

    //     it("it should return a class name of 'critical' if critical level has been reached", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCallCost(2.50);
    //         settingsBill.setSmsCost(0.85);
    //         // settingsBill.setWarningLevel(5);
    //         settingsBill.setCriticalLevel(10);

    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();

    //         assert.equal("critical", settingsBill.totalClassName());
    //     });


    //     it("it should stop the Total call cost from increasing when the critical level has been reached", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCallCost(2.50);
    //         settingsBill.setSmsCost(0.85);
    //         // settingsBill.setWarningLevel()
    //         settingsBill.setCriticalLevel(10);

    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();

    //         assert.equal("critical", settingsBill.totalClassName());
    //         assert.equal(10, settingsBill.getTotalCallCost());
    //     });


    //     it("should allow the total to increase after reaching the critical level & upping the critical level", function () {
    //         let settingsBill = SettingsBill();

    //         settingsBill.setCallCost(2.50);
    //         settingsBill.setSmsCost(0.85);
    //         settingsBill.setWarningLevel(8);
    //         settingsBill.setCriticalLevel(10);

    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();

    //         assert.equal("critical", settingsBill.totalClassName());
    //         assert.equal(10, settingsBill.getTotalCallCost());


    //         settingsBill.setCriticalLevel(20);
    //         assert.equal("warning", settingsBill.totalClassName());
    //         settingsBill.makeCall();
    //         settingsBill.makeCall();
    //         assert.equal(15, settingsBill.getTotalCallCost());

    //     });

});

