/* boolean math */

true + false
1

true + true == true
// false

[] == ![];     // true

[]+[] // ""
[]+{} // "[object Object]"
{}+[] // 0
{}+{} // NaN

![]
!![]
[][[]];
+[![]]

const this_value = () => {
    console.log(this);
}

1 << 32