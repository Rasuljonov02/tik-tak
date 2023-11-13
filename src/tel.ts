class telephone {
	constructor(public name: string, public tizim: string) {}
	message() {}
}

class samsung extends telephone {
	samsung() {}
}

class iphone extends telephone {
	iphone() {}
}

class huawei extends telephone {
	huawei() {}
}

class samsungA53 extends samsung {}
class samsungA54 extends samsung {}

class iphone11 extends iphone {}
class iphone12 extends iphone {}

class huaweiP60 extends huawei {}
class huaweiMeta50 extends huawei {}

function tel<T extends telephone>(tekshiruv: T, tizim: string) {
	// sistemani tekshiradi
	if (tekshiruv instanceof samsung && tizim != "Android") {
		console.log(
			`%c Hato: Tizimni kiritingiz  ${tekshiruv.name} da bunday ${tizim} System To'g'ri kelmaydi`,
			"color:red"
		);
		return;
	}
	if (tekshiruv instanceof iphone && tizim !== "iOS") {
		console.log(
			`%c Hato: Tizimni kiritingiz  ${tekshiruv.name} da bunday ${tizim} System To'g'ri kelmaydi`,
			"color:red"
		);
		return;
	}
	if (tekshiruv instanceof huawei && tizim !== "HarmonyOS") {
		console.log(
			`%c Hato: Tizimni kiritingiz  ${tekshiruv.name} da bunday ${tizim} System To'g'ri kelmaydi`,
			"color:red"
		);
		return;
	}

	// makalarni tekshiradi
	if (tekshiruv instanceof samsungA53 || tekshiruv instanceof samsungA54) {
		console.log(` ${tekshiruv.name} -> Markasi samsung -> telephone System (${tizim})`);
	} else if (tekshiruv instanceof iphone11 || tekshiruv instanceof iphone12) {
		console.log(` ${tekshiruv.name} -> Markasi iphone -> telephone System (${tizim})`);
	} else if (tekshiruv instanceof huaweiP60 || tekshiruv instanceof huaweiMeta50) {
		console.log(` ${tekshiruv.name} -> Markasi huawei -> telephone System (${tizim})`);
	}
}
/*
 togri qiymatlart

 */
tel(new samsungA53("samsungA53", "Android"), "Android");
tel(new samsungA54("samsungA54", "Android"), "Android");
tel(new huaweiP60("huaweiP60", "HarmonyOS"), "HarmonyOS");
tel(new huaweiMeta50("huaweiMeta50", "HarmonyOS"), "HarmonyOS");
tel(new iphone11("iphone11", "iOS"), "iOS");
tel(new iphone12("iphone12", "iOS"), "iOS");

/*
 hato qiymatlar

 */

console.log("--------------------------------");

tel(new samsungA53("samsungA53", "HarmonyOS"), "HarmonyOS");
tel(new iphone12("iphone12", "HarmonyOS"), "HarmonyOS");
tel(new huaweiMeta50("huaweiMeta50", "Android"), "Android");
