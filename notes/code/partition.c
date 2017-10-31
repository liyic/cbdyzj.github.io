void swapint(int *a,int *b){
    int t;
    t=*a;
    *a=*b;
    *b=t;
}

int partition(int a[],int n){
    int i=0,j=n-1;
    while(i!=j){
        while(a[j]>=a[i]){
            --j;
            if(i==j) return i;
        }
        swapint(&a[j],&a[i]);
        while(a[i]<=a[j]) {
            ++i;
            if(i==j) return i;
        }
        swapint(&a[j],&a[i]);
    }
    return i;
}