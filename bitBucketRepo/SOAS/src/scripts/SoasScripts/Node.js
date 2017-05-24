class Node {
    constructor(node) {
        this.PeriodicEventCheckBoxId = node.PeriodicEventCheckBoxId;
        this.PeriodicEventBlockId = node.PeriodicEventBlockId;
        this.PeriodicEventTypeInputId = node.PeriodicEventTypeInputId;
        this.IntervalId = node.IntervalId;
        //event day block
        this.DayTypeBlockId = node.DayTypeBlockId;
        //event year block;
        this.YearTypeBlockId = node.YearTypeBlockId;

        //event week block
        this.WeekTypeBlockId = node.WeekTypeBlockId;
        this.DaysofWeekCheckboxId = [];
        this.DaysofWeekCheckboxId = node.DaysofWeekCheckboxId;
       
        //event Month block
        this.MonthTypeBlockId = node.MonthTypeBlockId;
        this.MonthRadioBoxId = node.MonthRadioBoxId;
        this.WeekRadioBoxId = node.WeekRadioBoxId;
        this.WeekinMonthBlockId = node.WeekinMonthBlockId;
        this.WeekNumberInMonthSelectId = node.WeekNumberInMonthSelectId;
        this.WeekofMonthSelectId = node.WeekofMonthSelectId;
        //event end block

        this.EventEndTypebyCountRadioBoxId = node.EventEndTypebyCountRadioBoxId;
        this.EventEndTypebyDateRadioBoxId = node.EventEndTypebyDateRadioBoxId;
        this.EndbyDateInputId = node.EndbyDateInputId;
        this.EndbyCountInputId = node.EndbyCountInputId;
    }
}