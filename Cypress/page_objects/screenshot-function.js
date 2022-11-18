class ScreenshotFunction {
    constructor(){
        this.step = 0;
        this.name = '';
    }
    getStep(spec){
        this.step = this.step + 1;
        this.name = spec.name;
        this.name = this.name.split('.')[0];
        return this.name + '/' + this.step;
    }
}

module.exports =  new ScreenshotFunction();