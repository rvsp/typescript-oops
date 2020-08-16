// class A {

// }

// class B extends A {

// }

// class C extends B {

// }

// class X {

// }

// class Y {

// }
//not possible
// class Z extends X, Y {

// }

interface xx {
    getData(): string;
}

interface yy {

}

class zz implements xx, yy {
    getData() {
        return '';
    }
}


abstract class A {
    // same properties & methods
    abstract getSum(): number;
}

abstract class B extends A {
    abstract getY(): string;
}

class C extends B {
    getSum() {
        return 5 + 5;
    }


    getY() {
        return '';
    }
}
