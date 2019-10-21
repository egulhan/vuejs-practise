window.Event = new Vue();

Vue.component('coupon',{
    template:`
    <input type="text" placeholder="add a coupon" @blur="onCouponApplied">
    `,
    methods:{
        onCouponApplied(){
            Event.$emit('applied');
        }
    }
});

new Vue({
    el:'#root',
    data:{
        couponApplied:false,
    },
    created(){
        Event.$on('applied',()=>{
            this.couponApplied=true;
        });
    }
});