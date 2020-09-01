
module.exports = function SettingsBill() {
    let smsCost;
    let callCost;
    let warningLevel;
    let criticalLevel;

    let actionList = [];

    function setSettings(settings) {
        smsCost = Number(settings.smsCost);
        callCost = Number(settings.callCost);
        warningLevel = settings.warningLevel;
        criticalLevel = settings.criticalLevel;
    }

    function getSettings() {
        return {
            smsCost,
            callCost,
            warningLevel,
            criticalLevel
        }
    }

    function recordAction(action) {
        let cost = 0;
if(!action){
    return;
}
        if (hasReachedCriticalLevel()) {
            return;
        }

        if (action === 'sms') {
            cost = smsCost;
        }
        else if (action === 'call') {
            cost = callCost;
        }
        actionList.push({
            type: action,
            cost,
            timestamp: new Date()// 19 minutes ago


        });
    }

    function actions() {
        return actionList;
    }

    function actionsFor(type) {
        return actionList.filter((action) => action.type === type);
    }

    function getTotal(type) {
        return actionList.reduce((total, action) => {
            let val = action.type === type ? action.cost : 0;
            return total + val;
        }, 0);
    }

    function grandTotal() {
        return getTotal('sms') + getTotal('call');
    }

    function totals() {
        let smsTotal = getTotal('sms')
        let callTotal = getTotal('call')

        return {
            smsTotal : smsTotal.toFixed(2),
            callTotal : callTotal.toFixed(2),
            grandTotal: grandTotal().toFixed(2)
        }
    }

    function hasReachedCriticalLevel() {
        const total = grandTotal();
        const hasReachedCriticalLevel = total && total > criticalLevel;

        return hasReachedCriticalLevel;
    }

    function hasReachedWarningLevel() {
        const total = grandTotal();
        const hasReachedWarningLevel = total
            && total >= warningLevel && total < criticalLevel;

        return hasReachedWarningLevel;
    }

    function color() {
        if (criticalLevel && warningLevel) {
            if (hasReachedWarningLevel()) {
                return "warning"
            } else if (hasReachedCriticalLevel()) {
                return "critical"
            }
        }
        return "";
    }

    return {
        setSettings,
        getSettings,
        recordAction,
        actions,
        actionsFor,
        totals,
        hasReachedWarningLevel,
        color,
        grandTotal,
        getTotal,
        hasReachedCriticalLevel,
        //moment
    }
}





// module.exports = function BillWithSettings() {
//     var theCallCost = 0;
//     var theSmsCost = 0;
//     var theWarningLevel = 0;
//     var theCriticalLevel = 0;

//     var callCostTotal = 0;
//     var smsCostTotal = 0;

//     function setCallCost(callCost) {
//         theCallCost = callCost;
//     }
//     function getCallCost() {
//         return theCallCost;
//     }

//     function setSmsCost(smsCost) {
//         theSmsCost = smsCost;
//     }
//     function getSmsCost() {
//         return theSmsCost;
//     }

//     function setWarningLevel(warningLevel) {
//         theWarningLevel = warningLevel;
//     }
//     function getWarningLevel() {
//         return theWarningLevel;
//     }

//     function setCriticalLevel(criticalLevel) {
//         theCriticalLevel = criticalLevel;
//     }
//     function getCriticalLevel() {
//         return theCriticalLevel;
//     }

//     function makeCall() {
//         if (!hasReachedCriticalLevel()) {
//             callCostTotal += theCallCost;
//         }
//     }

//     function getTotalCost() {
//         return callCostTotal + smsCostTotal;
//     }
//     function getTotalCallCost() {
//         return callCostTotal;
//     }
//     function getTotalSmsCost() {
//         return smsCostTotal;
//     }

//     function sendSms() {
//         if (!hasReachedCriticalLevel()) {
//             smsCostTotal += theSmsCost;
//         }
//     }
//     function hasReachedCriticalLevel() {
//         return getTotalCost() >= getCriticalLevel();
//     }

//     function totalClassName() {
//         if (hasReachedCriticalLevel()) {
//             return "critical";
//         }
//         if (getTotalCost() >= getWarningLevel()) {
//             return "warning";
//         }
//     }

//     return {
//         setCallCost,
//         getCallCost,
//         setSmsCost,
//         getSmsCost,
//         setWarningLevel,
//         getWarningLevel,
//         setCriticalLevel,
//         getCriticalLevel,
//         makeCall,
//         getTotalCost,
//         getTotalCallCost,
//         getTotalSmsCost,
//         sendSms,
//         totalClassName
//     }
// }