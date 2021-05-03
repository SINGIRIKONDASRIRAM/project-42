class Drop{
    constructor(x,y){
        var options = {
            isStatic: true,
            friction:0.1,
        }
        
        this.rain = Bodies.circle(x,y,5,options);
        //load Image for BestMan
        
    }
}
