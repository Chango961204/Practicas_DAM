import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

export default function Mapas() {
  const default_coor = {
    coords: {
      accuracy: 36.90000152878906,
      altitude: 2292.9675073485228,
      altitudeAccuracy: 3,
      heading: 0,
      latitude: 22.7275401,
      longitude: -102.5219093,
      speed: 0,
    },
  };

  const [location, setLocation] = useState({});
  const [cordenadas, setCordenadas] = useState(default_coor);

  const busacarLocalizacion = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('No hay permisos para la geolocalización');
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    busacarLocalizacion();
  }, []);

  async function fecthData(id){
    if (id > 0){
      const ruta = await fetch('') 
      const json = await ruta.json();
    }else{
      alert('El id no es valido');
      return false;
    }

    if(json == null ){
      alert('No se encontraron los resultados');
      return false;
    }else{
      const localizacion ={
         coords:{
          "latitude":parseFloat(json.address.geo.lat),
          "longitude":parseFloat(json.address.geo.lng),
        }
      };
      setLocation(localizacion);
      console.log(location);
    }
  }

  const [user, setUser] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.columnas}>
        <Text>Coordenadas</Text>
      </View>
      <View style={styles.columnas}>
        <MapView mapType="satellite" style={styles.map}>
          {
          location.coords ? (
            <Marker coordinate={location.coords}
              title="Mi ubicacion actual"
              description="Aqui estoy"
              pinColor="#000033"
              icon={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhYZGBgZHBkaGhwaGBoZHBwaGRgaHB4ZGBgeIS4lHB4rIRgaJzgmKy8xNTU1GiQ7QDszPy40NTEBDAwMDw8QHBISGDQhISE0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0MTQ0NDQxNDQ0MTQ0NDQ0MTE0NDQ0MTQ0NDQxNDQ0NP/AABEIAQ8AugMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xAA7EAABAwIDBgUEAQMDAwUBAAABAAIRAyEEEjEFQVFhcZEGEyKBoTKxwfDRB2LhQlLxFIKiI3KywvIk/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABsRAQEBAQEBAQEAAAAAAAAAAAABEQIxIRJR/9oADAMBAAIRAxEAPwDZSVDaNEA3kpbigDtCorBcdQgwXCkvNj0KAVND0UenqEGC4T9Q2KAVfpKZpfUP3cipC4T9b6T+70BV/pTdDVFRF07XNkAr6JvD6+38IUBf2S69x7oBiNB1ScPqUVCxSq9wEAxG5Fht/t+UKFpQr3j3/CAYjcjw+hQoWlJr3IQCvql0NPdFQsD1Sa+vsgFfX2TlDRFQ0SK4ugKt9SbhSaJsl5kBFw4hRmtPAoBh4HspJeOI7oCc4QbqO1pkW3hANMix7KQ9wg3GiAPcIN0xTbcWQa0gixT73AgwUAqEEFM0hBH7uQptIIJEJyo4EQLoDqXFrqK3ENa71OA90VVxY0ug2B3LLsbtR/nuaSbE74AveT0U9dY2TWn1tp0py5oOomwMcCpFDWd0KhYTFB7IcQ4aGDoeI3jquRt3buLwlB1JjszC6WVB9TGx9BB5wQeZWTpuNXrXFrpNC0zZYTsnx9j8O5pc81mAQWvE5hycBIPO6s+I/q2CwBmFcH78zxlF4tFyOy3WY1GteIuio2mbaLF8V/UjGOeC0MYG3ygE5rHUnkT2CsOzfHtatNM02GqbsI+loMSXDlf4T9Qxo9e8IsPUbcSO6qQxRYJc91RxuSTaf7WaAdLrkV9uQ8NDoPMRPQz/AAs/TcaJWEm10uiYF7XUbZVQmm0u1I7p6tc2vbddXEhWEm105SMC9kVIwL262TdUSbX6IBVEmyRkPA9k/TIAg26peccR3QAvHEKO1h4FAMPBPl44oDLxGoUdrTItvQawzonnPBBEoA5wIIBTTGkEEhBjSCCQnXuBBAKAnuBBAMpum0ggmwQY0ggkQE5UcCIFygjbUqxSeQbhpNr6X04LLNp7PFb/ANdhAzD1cJ3/AGWqvoyCDIBBEixEjcVQzhRSL2Bwfe51n/3Dco6VFJ2LjXYeo9j3ZmEEjk4Xid8jcj2g99eznltMxmaIJ7e3wn24UNe+wyH1bvSeR36Jl7XyYAmTlG/d7G3AqGoz8JSDAWl1x6QTBI4HnMLkuoOBYQJi8aTDvm7gu3UoEgNLfTpmuYkXG7ePso9ZmQCxM2F503x7/CSiPTwYziQYJvfqfV8/sKczCw7PScWPyw5s2tE9NyQ2kbloILtR+RwPNPCi70uDTAubmc3a4/lBJxG2KhbkFnkQ5xAseQ1XW8ObNfVezPe9ra8zP3XHdTYXseS4XgmIN+MEytD8K7PdnLwIY1mUA6uc468gAPeUk24VazTgANuAIsnKRgXtfehSOUXsk1BJkXXZAVRJkXS6ZAEGyFIwINkio0kyLoBUaSZF0jIeBT1NwAg2KX5g4oCNQcUwKZ4I/Kdw+yeNVvFAC8EaplrCCCRog2mRuTrqgIgHVAHPBBAKaa0gyRZBrCDJFgnHPBEDUoDe4EQNU2xpBk2CDGEGTolvcCIGqDmbZ2o2m0tbJedI3czNvZULaFZ7GF5cHVHkkkjXnAhWHxA36hvvuVNxLHVzkkw03BaJ6WN9+9curtVCMBRL2knU/ULQ7r0/Su7gdgZxMdARcW468wpmA2cymwEkNAuZP3TVbxpgqbTFYOd/ta1xJjdMR8rJGotXw8Wvk2E+3+DK5HjDZwpsaT88Du+Ejaf9RA+m4NpPbfK0kjUQTMFRfEfiBmJpUnC3p9bdfUDu5pg6WxNnirRznfEO4RrPHU68F3meHW5DNp3A7uHa3us/wviU0cM9jPrLg1s6AXJMacFMo/1Br5m52MLABmyvMmROu462W4J+0tnOpkho+nrcco3yr54CxralBzjAcHQeMRv38dVUdk+IKGMzDKWOAMtdGh4OGqsHgWlkNZgAEkO19t/sk9ZfFyqiTa6VSOUQbIUzlsbJNQSZF11SFRsmRdLpkNEGxRU3Bog2KS9pJkXCAPaSZFwk+W7gnWODRB1SvNbx+6AeaOKZFI8EPJKdNUIOZt7blPC0vNe17myG+hswXGBMkACTquXS8W4d9J9ak7zBTu9khtRrBcuDHax+DdL8abEOJwj6eYtLQXjLfMWNJykcDPeF5+e5xII+oaHQqba2R6Y2ZtajiaYqUXh7TbeCDwcDdp5FSWsIMnQLzbgtpV6DvQ99PPIdkcWg7wZBuZAM9Vsngnxm3FsbSquDcQBB3NfGjmniRBI7JKWLi54IgapqMtzoP4RtYWmToEjaFYeW6DFlVYpu1caKj3hv73hVZlZ9Go6fUNY/jVHtDFQ8vY42OgjsZJv2XPr4+nVBDpa8A3NpPsVwWgeJ/EtSoMkw3hEKphdrGbPJMnTiN8cv3RQ37NfEtIdyBGaOMK5gjFma+/XRTcDQcWOBsJn8fhdTYPhOtWc0n0sJ13xxhXrb3hlrMOMguz5Gl+KWjKq+HcTYT91GdaR39loHhfZzX1zP+02N9YULxD4P8urmYT5biTESRaSAeqToVXZuJfTqNczWfhbd4BpOIdWeCJADZ1jfAGizXZPhmXguMN3Cfyto2FhMlJobHstn2svjpvGa4RsOUQUGHLYpL25jI6K0g9uYyNEtjg0QdUTHZbFJc0uMjRAHsLjI0SfKdwTjXBog6pXnNQDzgmxRKHkHkl+cDxQA1QbKleJP6eYfEZqlMeVVgkFtmOdr62bp4iFchSIvayWaoNr3t3TB5t2jsKtRqZKrSx4Ew6CCBoWkWOiGAdke1wJmYtzW7+IfDdLFsy1RBbJY9phzDy3EcQbLLMR4TrYbEZHOa5mocARmbzH+k2hR1MVKvPhbxC61Gs6Q4DI5xvPAngVK8RbTLWlgiN9ws/2tUc1stIblsIvp+E/gNtMqDJUd6haSRr1U/q5hjnbRbLy4w0/frb1LkVcRDrBrpt/yL2Xf2thMoLw4ubzDNOFgq/XpkgDJlvMTFtJMe+ukLI0jzXMJzloBiAGyecBsQbxJKPz2hxIY3MBJkuJHsHgN9ygKADrT6hdx+oybx/tbz++6G6BMDS4AFmwbc51vrPdUNF8E7dDf/Tqub6rU7BtxqOPdP+P/ABIaNIU2fW868GiPusrc9+YGbxPCOXLcnMRtB9QMD3klk5XXkA/6SRqPtfimCdsvb9ahVbWg5c3qEQ1wJuJj9haHtfbDKrGFkkOAfYXuLCN5AJlZxszAio9rX1CWzJAkk8hOnVWOo2SGgwG2B0DY01tGiyjr4bGN3G3Qx3/StL2HVHktPFZNhW1ARmAaZjMCIPCZBj8rVPD9Mmi38refWdOm4ZrhG12Wx6oMOWx+ETm5rjpddEg5ua4RtdlsUGuy2PwiczNcfKAntLrjRDyDySg4NsUfnjmgHnjgUgUSOCPyDxR+cDuQGaoNr3SPKIvwv2QFEi86JRqg2jW3dADVBtxVQ8e4QljHHQSCRcx0VtFIi/BQNuUxVoubHPcp6nxsZG/DQ0RLm6AZbCTvAvv3rgVcM4OcZtP+nSNRqLDW6smOpPaSyTcwP57KJVwIa3SXfUTzA0A1PXdK5yqRMDtYixBIJiJFu9t2gUhlAvzB2X12A1gRpPDS2+y4mJp39QgAjMYjnEkSujszFy0Zg4HM6ATMAjLYnf8AzKYGnYa7naiwbzECPYklc7EyxzhxMibb7T3HYK3MwWY5p9JiOYAtHOVy9r4VrYJBOoMafv8ACSiujKHRzBJmLTHt/hB+FMlwALTMbtIuEsNY0zDg2QDHcW/dFPwz8t4dBtyPAzuOqrQ/sOkA7OBqLmJGkZXDd8rteWYIygjWW3IJ1tw6cFGwDWMAkEDQm+64PZTaQdJiHRqNJjhwOnVRQeGa76QCYOkzHtvC0vwrUApAC4/dyoeD9Rib7uDo6z2Vx2NVy25cLlVzfrKspGa4+UbXZbHrZJY7KL77oy3NcW3LqkHNzXHyja7LYoB2WxuiLc1wgDmZrhF5B5JWfLZDzxwKAefyReRG9DyOfwh587vlAfmzaNUXlRedL9kPJi86ckPOm0a27oDNWbRqkuoWvccEflRedLoeZmtGqCmeItjgHO0ek+1/yqjiaZYIa05jqY3SDr7LRfF7/LwznAiZEWnsFSNn4rz2esTxMD7arl1MqorGMo/7omCYBknrwKYp0XB4GhAGY6Q4ifvHYKy4/AsZpHSIJJ3fZQWYQMDZgvOYk8XSCD7QI91OtPbPr5BlNydBzAB9tI7JnHsD3ZW7wY5g7uoMn2TLHwRxBDh2Bj94hS6DZM7wY9y4fvdBxqWzodndoAfTqcxNvun8RhCWQI57onf9+67GMpRkjSO5NyfkJtrNZ3mPwY7pohF8BrSLObmmLh+b97FdOmycrx9TPqjgQdd5FnX5qO2hJI1gktPQT7DMR2TDcYWAsJh9hOoiMzSeGpE8DyQWWjh2sBLbzcAm0nfoTrK6eAqw4OIAg7rj3VAGPe9xmHZQJExAA4gwpDtsvaQNRPCPiItfsg2ei4PaCDbT9hOTltrv/eyoOx9sPY0OLssxu16hW/Z20GVxYgOAuBv5hdeetTYnlma+iMOy21RZsttd6GXNfRUwCzNfRD/p+aGfLbVDz+XygHn8vlDyI3/CPyOaLz53IB502jXmh5MXnS/ZH5UXnRF5s2jW3dAPNm0a2Q8vLedEZpRedEXmZrRqgqf9R6//APLrll0amT/aI4qi+H2xlF5HDW/2Cs39T22ptlxAMxcNvxO/RV7Z0gT9LY5Tf/gXXLr1U8FjXlz7DKAYmZibH4lc9+JALQJkC068ASf3Uro44CMzrC8NG/3PHeei4NIue/MRGYwOg/QpansZmh0akx1uY/eCm4ZncnN23dyR7pikMjBG4g+0/wAEroVKTBedW/mT7zCA3i0ONx9rSR2PZR3sgAnQS4/vt9k5RqCQ08DzFzp8KTiWhzIJ9R7747CUHK8whrncj7XFvn4XLpMdUILtSIBNvpBGvP8AefVqUoZA0Lj/APGfcbkvA4cSRawI6i1x8d0DuCwGYtMXEA21gRPI7p0KkM2cxrj6dDrB3k7uw7roUGEAa23WtI3EosSDIOaDpyNuCDm7a20ykGBrc7XgkHh04G65WA8TOYc7Tki7d4toCBHddv8A6Wk9zWPbnDjFvxGhRbX/AKXHy3VMLVc90hzadSBI3gPEXiIkbr8VUms1a/CnjKljDkcfLrCLGwfzYTaf7dVa82W2q8518NXwrgK1KpTzXaXtIEtM2OljwV48I+PH5hSxJLxNngEvA6AesDuL6wrl/pY1TJmvoh5HP4RCpAEXGoPW6P8A6jkqSHnngj8kDej8gcSkCsTwQDzibRqlGkBedL9kZpAXvZI80m3G3dABVJtxSvLi/BA0gL8EkVCbcUGd/wBQHOqVWtzQANIN+k27KvYGvlPqEk2aIvpFhEDqflWjxm0F5kg5TFhEcyeKpjS6TltE+oCJ4+o3J5LjfVR067c2YuLSbzwaJ+mfa/QrkYlgDg0am/O5AEcBdTnsLW5BfTMdb6kTpyUCowgybuMOd0JsO1/dY06Hm8nRxI6Nj/PdS6NXMw33mJG4/wAR8JmnTBAJO6/WISKLA5obBiSR0ESP3igXhGZi4QQ3MGidTEXPuV0KJzvJzelon/Pe3uobjlIcOB13kGw6IUQ0Z2zrFz7fsIImIxcA8iQOu75ak0do+tzXWy3BmNYEfP2TOMoyXRZrWz/3kEqGz6fUAdBN5sDYx7XWju0trEnLnEjRK2rjCGid+kGx3e+v2UGk0SSIBnT6hcbwdyRiZIsDvtM6C8Rr91gcwWIJcwlpIJA9UA9I4rZ9j4oOosIbFtDu5W5QsXwFB2YEOMgyPbed62bYTM1JpJB3enlx5q+fWdJeIwjKzS2oxr2nVrmhw7FcvDeGcHQrCtTw7G1BoRMNkQS1swDEiQN67LnZbD5RtZmuV0SAZmvoh5A4lE5+WwReeeSAeeeSX5IHFH5ITYrFABVJta6WaQF72v2QNIC/BNiqTbjZAYqk2tdKNMNuNyM0wLjckNqE2O9BTfFzB6iXXPxOkC0fdUap6coZaNDreZJDePM2uOC1DxRggWWGtp1grOMVhwyXC7rhs7uYHck8o3rl16qeCpuJkGw3zubeSeZ/hR33zCJJj8/geyDX+kg6yJm8QbA/x/aUdUepwGgDh1dlFj0GUe5UtMMeQWujUA9RJ/wFIMyHAGQQInUHS/WOwRU2hzIH+mA3pnH/AD7o2PzZhvBkexCCZj2uewDLHE+5n7KLhh6nyLZcw/7YH3XXo+qG2iSPZzSTHQkKAIggHfln+0ECe8d0Eaq0Bjx/u94g/vZM0MO3K5hsZaRxkAGRH78o6zCSf7msB5F5/wAoOzNg72gGf90kg/8A17oGcSwEtc0gH/UNxBFieG6+iiiCcsODr2+kg6EGDcjiImVOxmXO11spseXET76JurhYeC03IBHExb/Psge2bhznE3BI9/46FbFss5aTAI0n5KyrZsiqCRNpuPmQFquxgHUWEgi3+fyr59ZU0NzXPwic/LYfKDnZbBG1ua5XRIBgdco/IHNIe4tsNEPOPJAXnFOmkEflDgmRVPFAYqk24pbqYAnhdGaYF4TbahNjvQBtQmx3pbmACRqEHUwBI3JDXkmDoUHM27UmkcxsCFnW04YS4TLoubwDpA3ch+nUdrUh5NS3+h32WXU6geCHatPp3348+PsFz69VHGxDHNc0aE5nHlYBvx+6pitUIbP+oPJA6kAAqZiqslztfTlj+2QB7kBQyzM6BofuP/0VDU2nDS2NxA9niD1iUdBgL3Eb/i5H8dimomegPYQPt8oYd0PIFzqOYnQc4JQdrBE5iZ0JHIHn2Kh7baWOcNxdJPGYP70UjC2dNyHa8+Jj5RbaZLAeGXsAe9yEHNrOETvJYY4ZcxH2hNVa8seItqOV2WB/7T2HFNmr/o/3EgewsemndIe4hrSRIcYPS1+4+UD2Jh2a2ZjpkDdOjh3E9U42mfTDpEgtM/BniJt/Ci5yx7QD6Zjj6XaX949gn24cmQ25aRYG8G2m/T4QdimcrJF4B/8AcDwtdaP4fxBdh6ZH+2/UWWUYisSwyJ3NIF/86LUPCEuw7Q4aRG6xHJXz6zp22NzXKS5xaYGiD3ZTA0S2NDhJ1XRImtDhJ1SvJam3vLTA0SfNdxQH5ruP2TxpN4IGmOCYFQ8UBtqE7066mAJA0RlgA0TLXkkAnVAGvJME2KccwASNQjcwAEgJpriTBNkCKhLmuBvINrcCshqSx72gXJLegJ3ncIBWzPaACRqsv25hstd8zBOkwTPAbtFHao4DXeq+hfJ6iBpwsE1SHDUgfY/wO6dL/qe6IElo6A/lJe0ggjRuT/5BhP8A5Lm0uBkBGpa3v/wpRwjcwLblpmBwIa6Pkpugz6mm1wPe4HeFIbVIdmbuDZ6tF56gH5QSsNkDiDucHA9QRJCXi8riWjSNOcfwD2TddzS9nIX5jd9z3CKiyHGeB/8AK35QcHyR5jCNJj21H/jCfZR+lh4HpJAj5+ZS6oAI3+on2zZfsE9WHqDt0OJjkXOH47IIxw4D+NhA3G0j8Jb35C18WLwCeDXRBP8AbIlLr/W3i2AD1zd7D4TbqJJnQEZY3akj3uOyAgXPc5sRN4G/sFp/hR0YdsWHWdLabuizrBUPWBEdDYt4gd7dVqPh7CtZRAA375B7K+fWdOjTaHCTcpL3EGBYIVHQYFkumARJuV0SDGhwk6pXlN4fdNPcQYFgk+Y7igAeeKfLBwRlg4BR2vPEoA15nVPOYACYSiwRoFHa4yL70BscSQCU69oAJAQc0AEgJpjiSASgJjySATZVXxjgg0l7d4kj2jtCt72gAkCFytr0S+mRckab1PU2NjLW4T0EmZ1E31cCR2CSKcMDYkkEHq9zH69WH9K6eJolg5z+bT8WTD2FrnC0AyT7QPsVyU5zanqImdCDxh5d9jCfpugmAYNnDeCSb/Hyjw7WySBJDcxnfJY63tZWXYGDDq4OoJ/Jv7oOdh9n1HggMcXRlaY3cfgFdR/heu5u5pjLfpqr26mGgZRCOjeZv1XScM1mWP8AD1akC9wzNuDF4C5NM2J1hrdeFwfwtfxtEOYWwIIKzPa2A8l5EWAd2hxA+VPXOEuucBd5iQHNcBvAbu/eaefQhljYWn+20HqPxyTQfplvOYnuSPsB7lT2UQSL2Mubza68cyJPdS0vZTHTm15HUHeL/wCFomCecjdRbQqnbIw7C6L7jbSLfvZXjCUgGxrGk8F04ZTtISJN0io4gwLBCqYMCyXTaCJN1aQptBEm5S/LHBM1HEGBZIzniUADzxPdSSwcB2QLRwCjNceJQAOMi57qQ9og2GiDmiDZR2kyL7wgNriSLlPvaADAQe0QbJim64ugOm4kgEyl12DKbJdQAApmkZIn9sgo3iDBAPaAJvN+PE8gq7tISHEcbj4/PcrRfE+FlmdouAR8FZJtLxAwAt3k3HBrSLfC42fVSp+FdfSxDOo9LZb0iOyuXhWmc88Br8hZpgNutcQCDJ1+bfPwtc8G0vQXEai3PT991vM+l8WClc3v1ulVhERbpZCtYWsk0LzN11SOjeZv1uqt4zwejgLER01VqrWiLLn7Twnm0nNkyBbkf2D7KepsbGRec1r2NcYhrgTpe7h/HuF0cJtFn0Z2hzXOIjnvHefcpt/hZg9dQlztfUbD8cUrDbPYHBwc0FpkEfdclLn4Ww5Lpda3+f4srTVsbWtusqjsjxFQD2Uy7K94IbAOUxuDtPaVcaIkXvddefE0KQkXv1um6pg2t0R1jBtZOUhIvdUwVNoIk36peQcB2TFUwbJGc8T3QAHmpbgjIUNp0QGw3CkvFj0KN2hUVhuOoQGw3CfqCxR1ND0UembhAKRuE/W+k/u9Cr9JTNI+ofu5BHxNdjGkvNoPuY3TvWY4nZrMxfDACSdBv3I/6mYyo3EPBB+lopkaNFszupn4VVNd5r08rXuY1ghpJ1NiTz3+659XVRb9m4Gi/wCkMdG8ASCP8rS8NQDKTWi0RPZZz4C8O12Pc6oIpk5hreTmH7yWmYfX2/hbzChQ1Sq9gEeI0HVJw+pVpCheUK9o90eI3IsNv9vygqfivYj6lF/lCZ1b11hZbisHXpNpMfScXseS4/2F1hbVuUrfsRuTQwrHXc0EjfF+6i8/xUrCNibLxNaqGBhYzzBUBj6SDJyu791vLgRA5BJOHY2zWhvQJ+hp7/wtkxluhQ0SK5uhiNfZOUNFTAoiyXlUesfUm5QABTDojKhN1CA2C46hSn6HoUH6HoorNR1CA2C46qTU0KFTQ9FGpfUEB0vqCfrfSf3ejq6FR6P1D93IItfZ1KsR5jA6NCRce6UzZNBjYbTaL8J+6nVtE1R+pZkB4fX2S6+nujr6e6bw+vt/C0ChqeiViNAjxGg6pOH1KAYfehid3v8AhHiNyLDb/b8oDw+9FiNQhiNyPD6FAeH0PVIxGvt/KGI1HRLw+nv/AAgOhp7puvqhiNfZOUPpQCh9KcUat9SbQf/Z'}}
            />
          ) : null}
        </MapView>
      </View>
      <View style={styles.columna_2}>
        <Text> Ingrese ID del Usuario</Text>
        <TextInput
        placeholder='ingres el id del usuario'
        keyboardType='numeric'
        onChangeText={(value) =>{
          setUser(value)
        }}
        />
        <Button
        color='#556b2f'
        title='Buscar coordenadas del usuario'
        onPress={() => fecthData(user)}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#cdcdcd',
  },
  columnas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height - 100,
  },
  columna_2:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding: 20,
    borderRadius:100
  },
  input:{
    heigth:40,
    margin:12,
    borderWidth:1,
    padding:10
  }
});