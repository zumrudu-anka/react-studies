import { useEffect, useState } from "react";

const Currencies = () => {

    const [currencies, setCurrencies] = useState([]);
    const [lastUpdate, setLastUpdate] = useState("");
    
    useEffect(() => {
        fetch("https://finans.truncgil.com/v3/today.json")
            .then(response => response.json())
            .then(response => {
                const goldTypeCurrenciesJson = Object.fromEntries(Object.entries(response).filter(([key, value]) => value.Type === "Gold" && key !== "ons"));
                const goldTypeCurrenciesList = Object.keys(goldTypeCurrenciesJson).map(key => ({
                    key: key,
                    value: goldTypeCurrenciesJson[key]
                }));

                setCurrencies(goldTypeCurrenciesList);
                setLastUpdate(response.Update_Date);
            });
    }, []);

    const currency_names = {
        "gram-altin" : "Gram Altın",
        "gram-has-altin" : "Gram Has Altın",
        "ceyrek-altin" : "Çeyrek Altın",
        "yarim-altin" : "Yarı Altın",
        "tam-altin" : "Tam Altın",
        "cumhuriyet-altini" : "Cumhuriyet Altını",
        "ata-altin" : "Ata Altın",
        "14-ayar-altin" : "14 Ayar Altın",
        "18-ayar-altin" : "18 Ayar Altın",
        "22-ayar-bilezik" : "22 Ayar Altın",
        "ikibucuk-altin" : "İki Buçuk Altın",
        "besli-altin" : "Beşli Altın",
        "gremse-altin" : "Gremse Altın",
        "resat-altin" : "Reşat Altın",
        "hamit-altin" : "Hamit Altın",
        "gumus" : "Gümüş",
        "gram-platin" : "Gram Platin",
        "gram-paladyum" : "Gram Paladyum"
    };
    
    return (
        <section className="currencies">
            <table>
                <thead>
                    <tr>
                        <th>Tür</th>
                        <th>Alış</th>
                        <th>Satış</th>
                        <th>Değişim</th>
                        <th>Son Güncelleme</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currencies.length > 0 ?
                        currencies.map((currency, index) => (
                            <tr key={`currency_${index}`}>
                                {/* <td>{currency.key.replace('-', ' ')}</td> */}
                                <td>{currency_names[currency.key]}</td>
                                <td>{currency.value.Buying} &#8378;</td>
                                <td>{currency.value.Selling} &#8378;</td>
                                <td className={currency.value.Change.includes('-') ? "drop" : "inc"}>{currency.value.Change}</td>
                                <td>{lastUpdate}</td>
                            </tr>
                        )) : 
                        <tr>
                            <td>Veri Alınamadı</td>
                            <td>Veri Alınamadı</td>
                            <td>Veri Alınamadı</td>
                            <td>Veri Alınamadı</td>
                            <td>Veri Alınamadı</td>
                        </tr>
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Currencies