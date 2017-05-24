class Event {
    constructor(event) {
        this.Tittle = event.Tittle;
        this.Priority = event.Priority;
        this.StartDate = event.StartDate;
        this.EndDate = event.EndDate;
        this.Types = event.Types;
        this.Tags = event.Tags;
        this.Assets = event.Assets;
        this.Color = event.Color;
        this.Description = event.Description;
        this.Schedule = event.Schedule;
        this.Node = event.Node;
    }
    /**
 * /when click on peeriodic event checkbox
 * @param {} type 
 * @returns {} 
 */
    CheckPeriodicEvent() {
        console.log("Event.CheckPeriodicEvent()");
        console.log(this.Node);
        console.log(this.Schedule);
        if (this.Node.PeriodicEventCheckbox.is(":checked")) {
            this.Schedule.EnableSchedule();
            this.Node.PeriodicEventBlock.slideDown();
        } else {
            this.Schedule.DisableAllSchedule();
            this.Node.PeriodicEventBlock.slideUp();
        }
    }


 /*Calls when in dayofmonth block  click on dayofweek radiobox*/
       SetDayofMonth(){
    if (this.Schedule.DayofMonth.is(":checked")) {
        this.Schedule.DisableDayofMonthBlock();
        this.Node.CloseDayandMonthBlock();
    }
    if (this.Schedule.DayofWeek.is(":checked")) {
        this.Schedule.EnableDayofMonthBlock();
        this.Node.OpenDayofMonthBlock();
    }
}

    /**
 * /when chose the type of periodic event=> month/year, day/week
 * @param {} type 
 * @returns {} 
 */
        SetPeriodicEventType(type) {
        this.Schedule.PeriodicEventType.val(type);
        this.Schedule.EnableSchedule();
        if (type===1) {
            this.Node.OpenMonthBlock();
        }
        if (type==2) {
            this.Node.OpenWeekBlock();
        }
        if (type==0 || type==3) {
            this.Node.CloseDayandMonthBlock();
        }
        }
}

class Schedule {
    constructor(schedule) {
        this.PeriodicEventType = schedule.PeriodicEventType;/*Year:0;Month:1;Week:2;Day:3*/
        this.Interval = schedule.Interval;/*1...30*/
        this.EndbyCountRadio = schedule.EndbyCountRadio;/*by count or by date => string input*/
        this.EndbyDateRadio = schedule.EndbyDateRadio;

        this.EndbyCount = schedule.EndbyCount;/*by count or by date => string input*/
        this.EndbyDate = schedule.EndbyDate;
        /**
         * /day block
         */
        this.DaysofWeeks = schedule.DaysofWeeks;/*When PeriodicEventType==week */
    
        /**
         * /month block
         */
        this.DayofMonth = schedule.DayofMonth;/*When PeriodicEventType==day of month  --radiobox--*/
        this.DayofWeek = schedule.DayofWeek;/*When PeriodicEventType==day of week  --radiobox--*/
        this.WeekNumberinMonth = schedule.WeekNumberinMonth;/*When in month Set Day of week --- first, second.... fifth--dropdown*/
        this.WeekofMonth = schedule.WeekofMonth;/*When in month Set Day of week --- Sun, Mon...---dropdown*/
    }

   
    DisableSchedule() {
        if (this.PeriodicEventType.val() === 1) {
            this.DayofMonth.prop("disabled", true);
            this.WeekNumberinMonth.prop("disabled", true);
            this.WeekofMonth.prop("disabled", true);
        }

        if (this.PeriodicEventType.val() === 2) {
            this.DayofWeeks.prop("disabled", true);
        }
    }

    DisableAllSchedule() {
        this.PeriodicEventType.prop("disabled", true);
        this.Interval.prop("disabled", true);
        this.EndbyCount.prop("disabled", true);
        this.EndbyDate.prop("disabled", true);
    }

    EnableSchedule() {
        if (this.PeriodicEventType.val() === 1) {
            this.DayofMonth.prop("disabled", false);
            this.WeekNumberinMonth.prop("disabled", false);
            this.WeekofMonth.prop("disabled", false);
        }

        if (this.PeriodicEventType.val() === 2) {
            this.DayofWeeks.prop("disabled", false);
        }
        if (this.PeriodicEventType.val() == 3) {
        
        }
        if (this.PeriodicEventType.val() == 0) {

        }
    }

    EnableDayofMonthBlock() {
        this.WeekNumberinMonth.prop("disabled", false);
        this.WeekofMonth.prop("disabled", false);
    }

    DisableDayofMonthBlock() {
        this.WeekNumberinMonth.prop("disabled", true);
        this.WeekofMonth.prop("disabled", true);
    }

}

class Node {
    constructor(node) {
        this.PeriodicEventCheckbox = node.PeriodicEventCheckbox;
        this.PeriodicEventBlock = node.PeriodicEventCheckbox;
        this.DaytypeBlock = node.DaytypeBlock;
        this.YearTypeBlock = node.YearTypeBlock;

        this.WeekTypeBlock = node.WeekTypeBlock;

        this.MonthTypeBlock = node.MonthTypeBlock;
        this.WeekinMonthBlock = node.WeekinMonthBlock;/*opens when in Monthtype clicking Dao of week -> second radio box*/

        this.WeekTypeBlock.hide();
        this.MonthTypeBlock.hide();
    }

    OpenWeekBlock() {
        this.MonthTypeBlock.slideUp();
        this.WeekTypeBlock.slideDown();

    }

    OpenMonthBlock() {
        this.WeekTypeBlock.slideUp();
        this.MonthTypeBlock.slideDown();
    }

    CloseMonthandWeekBloks() {
        this.WeekTypeBlock.slideUp();
        this.MonthTypeBlock.slideUp();
    }
        OpenDayofMonthBlock() {
        this.WeekinMonthBlock.slideDown();
        }
        CloseDayandMonthBlock() {
            this.WeekinMonthBlock.slideUp();
        }
}



