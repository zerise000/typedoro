class Time{
	private seconds: number;

	public constructor(hours:number,minutes:number,seconds:number){
		this.seconds = hours*3600 + minutes*60 + seconds;
	}

	public update(): boolean{
		if(this.seconds == 0)
			return false;

		this.seconds--;
		return true;
	}
	
	public print(){
		let hours_left: number = Math.floor(this.seconds/3600);
		let minutes_left: number= Math.floor(this.seconds/60);
		let seconds_left: number = this.seconds % 60;

		console.log("%d:%d:%d left",hours_left,minutes_left,seconds_left);
	}
}

async function delay(ms:number):Promise<void>{
	return new Promise((resolve) => {
		setTimeout(resolve,ms);
	});
}

async function countdown(t:Time){

	do {
		console.clear();
		t.print();
		await delay(1000);
	}while(t.update());

	
	console.log("counter expired");
}

function main(){
	const t = new Time(0,0,3);
	countdown(t);	
}

main();
