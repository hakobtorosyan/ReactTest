class EventJsModel {
    constructor(event) {
        this.Color = event.Color;
        this.Description = event.Description;
        this.Title = event.Title;
        this.StartTime = event.StartTime;
        this.EndTime = event.EndTime;
        this.Priority = event.Priority;
        this.PeriodicEventType = event.PeriodicEventType;
        this.User = event.User;
        this.Schedule = event.Schedule;
    }
}





class Schedule {
    constructor(schedule) {
        /**
         * Day => 0
         * Week => 1
         * Month => 2
         * Year => 3
         * Single =>4
         */
        this.PeriodicEventType = schedule.Type;/*Year/Day/week/month*/
        if (this.PeriodicEventType===0) {
            return;
        }
        this.Interval = schedule.Interval;/*interval*/

        this.EndbyCount = schedule.EndCount;//event end by count 
        this.EndbyDate = schedule.EndTime;//event end by date

        if (this.PeriodicEventType===50) {//WeekType
            this.DaysofWeek = schedule.SheduleWeek.Days;/*in week type Days of week*/
        }
        if (this.PeriodicEventType===75) {//in month type
            this.MonthSheduleType = schedule.MonthType.MonthSheduleType;//when MonthSheduleType=0 dive of $("#setdayofmonth").hide();
            if (this.MonthSheduleType === 1) {
                this.WeekNumber = schedule.MonthType.WeekNumber;
                this.DayofWeek = schedule.MonthType.DayOfWeek;
            }
        }
    }

    SetNode(node) {
        if (this.PeriodicEventType === 0) {
            //console.log("single");
            $(node.PeriodicEventBlockId).hide();
            $(node.PeriodicEventCheckBoxId).prop("checked", false);
            return;
        }
        $(node.PeriodicEventCheckBoxId).prop("checked", true);
        $(node.PeriodicEventBlockId).show();
       
        if (this.PeriodicEventType === 25) {
            //console.log("daytype");

            $(node.DayTypeBlockId).show();
        }
        if (this.PeriodicEventType === 50) {
            //console.log("WeekType");
            $(node.WeekTypeBlockId).show();
            for (var k = 0; k < this.DaysofWeek.length; k++) {
                var id = this.DaysofWeek[k];
                //console.log(id);
                $(node.DaysofWeekCheckboxId[id]).prop("checked", true);
            }
        }
        if (this.PeriodicEventType === 75) {
            //console.log("Type=> Month");
            var str = node.MonthTypeBlockId.toString();
            $(str).show();
            if (this.MonthSheduleType === 0) {
                //console.log("DaySheduleType");
                $(node.WeekinMonthBlockId).hide();
                $(node.WeekRadioBoxId).prop("checked", false);
                $(node.MonthRadioBoxId).prop("checked", true);
            }

            if (this.MonthSheduleType === 1) {
                //console.log("MonthSheduleType");
                $(node.WeekinMonthBlockId).slideDown();
                $(node.WeekRadioBoxId).prop("checked", true);
                $(node.MonthRadioBoxId).prop("checked", false);
                $(node.WeekNumberInMonthSelectId + ' option[value="' + this.WeekNumber + '"]').prop("selected", true);
                $(node.WeekofMonthSelectId + ' option[value="' + this.DayofWeek + '"]').prop("selected", true);
            }
        }

        if (this.PeriodicEventType === 100) {
            //console.log("yeartype");
            $(node.YearTypeBlockId).slideDown();
        }

      

        if (this.EndbyCount != null) {
            $(node.EventEndTypebyCountRadioBoxId).prop("checked", true);
            $(node.EventEndTypebyDateRadioBoxId).prop("checked", false);
            $(node.EndbyDateInputId).prop("disabled", true);
            $(node.EndbyCountInputId).prop("disabled", false);
            $(node.EndbyCountInputId).val(this.EndbyCount).html(this.EndbyCount);
        }

        if (this.EndbyDate != null) {
            $(node.EventEndTypebyCountRadioBoxId).prop("checked", false);
            $(node.EventEndTypebyDateRadioBoxId).prop("checked", true);
            $(node.EndbyCountInputId).prop("disabled", true);
            $(node.EndbyDateInputId).prop("disabled", false);
            $(node.EndbyDateInputId).val(new Date(this.EndbyDate)).html(new Date(this.EndbyDate));
        }

        $(node.PeriodicEventTypeInputId + ' option[value="' + this.PeriodicEventType + '"]').prop("selected", true);
        $(node.IntervalId + ' option[value="' + this.Interval + '"]').prop("selected", true);
    }
}


