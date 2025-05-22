import {CounterAPI, GroupByTypes, OrderByTypes} from "counterapi";

    const counter = new CounterAPI();

    const q = {
        name: "test",
        group_by: GroupByTypes.Day,
        order_by: OrderByTypes.ASC,
    };

counter.counts(q).then((res) => {
    console.log(res);
});