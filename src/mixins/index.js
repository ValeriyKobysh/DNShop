const mixin = {
    methods: {
        reload(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.updateSpinner(false);
                    this.updateChecked(true);
    
                    setTimeout(() => {
                        this.updateChecked(false);
                        resolve();
                    }, 1500);
                }, 3000);
            })
        },
        updateRoute(){
            return new Promise((resolve, reject) => {
                this.updateSpinner(true);
                this.updateChecked(false);
                this.reload().then(() => {
                    for (const key in this.copy) { this.copy[key] = false }
                    for (const key in this.paste) { this.paste[key] = '' }
                    resolve();
                });
            })
        }
    }
}

export default mixin

