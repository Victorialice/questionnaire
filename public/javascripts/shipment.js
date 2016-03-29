provinceForm = document.getElementById("shipment_province_id");
cityForm = document.getElementById("shipment_city_id");
countyForm = document.getElementById("shipment_county_id");

provinceForm.onchange = function(){changeProvince(this.value, cityForm, countyForm)};
cityForm.onchange = function(){changeCity(this.value, countyForm)};

to_provinceForm = document.getElementById("shipment_to_province_id");
to_cityForm = document.getElementById("shipment_to_city_id");
to_countyForm = document.getElementById("shipment_to_county_id");

to_provinceForm.onchange = function(){changeProvince(this.value, to_cityForm, to_countyForm)};
to_cityForm.onchange = function(){changeCity(this.value, to_countyForm)};

function changeProvince(param, eles_city, eles_county) {
	// if (param == "")
	// {
	// 	cities = null;
	// 	initelement(cityForm, cities);
	// }
	for (i = 0; i < provinces.length; i++)
	{
		if (provinces[i].id == param)
		{
			cities = provinces[i].cities;
			initelement(eles_city, cities);
			changeCity(eles_city.value, eles_county);
			break;
		}
	}
}

function changeCity(param, eles_county) {
	for (i = 0; i < cities.length; i++)
	{
		if (cities[i].id == param)
		{
			counties = cities[i].counties;
			initelement(eles_county, counties);
			if (counties.length > 0)
			{
				eles_county.style.display = "inline";
			} else {
				eles_county.style.display = "none";
			}
			break;
		}
	}
}

function initelement(aelement, aarray) {
	while (aelement.options.length > 0)
	{
		aelement.options[0] = null;
	}
	for (i = 0; i < aarray.length; i++)
	{
		aelement.options[i] = new Option(aarray[i].title, aarray[i].id);
	}
}

for (i = 0; i < provinces.length; i++)
	provinceForm.options[i] = new Option(provinces[i].title, provinces[i].id);
changeProvince(provinceForm.value, cityForm, countyForm);

for (i = 0; i < provinces.length; i++)
	to_provinceForm.options[i] = new Option(provinces[i].title, provinces[i].id);
changeProvince(to_provinceForm.value, to_cityForm, to_countyForm);
