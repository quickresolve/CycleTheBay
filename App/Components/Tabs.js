import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  ScrollView,
  Image,
  TabBarIOS,
  View
} from 'react-native';


var mapIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD0UlEQVRoQ92ajbUMMRTH/68CVIAKUAEqQAWoABWgAlTgqQAVoAJeBagAFXB+c/J3IiaTO9nZ2Tebc/a83flI7u9+JPcm70RH0k6OhEOAfJZ0UdIzSW8WBruf+qXbffR/V9ILSV8A+Z0J/22hAQ1wpVDMT0kvJb2SxPfedkvSU0n8HVoO8l3S5XS9F6gEoE8sgdCPJd1M/fP7NAExVrShGCyAJWi/JF0oQYB6kAaeC1QDQNi8oUGA7mQXeea5pCkgXB8A5DMAluXzYwzE/UeBogClxtEsluJ9t48JiL9uADxK8HynEccow645hEbuWmMzWA2IdxHEMWAXKi3QchneRyjGGVyEwE2a5jsaN8D79GxpuRBIzUK+3gtQAiIsQHwM5Gc+JaXllsrfnwVSAtkicy3QshD37QV8B+xd46UukIggaz8zCfI2+ebtPUnFInw9Tb9onUZQEzMEM3ESbZMg+COzgufraKe15xDwmiQC1gHNb4T2lMp4xAcx8XehCwy8mmsh1Ick0NWJ9QILoTjijpkJ+K+SUOq9iUwgBELnzPUsWJGUgtmH1MGWRChmtteFGwUUPYDgYlgJkFrQh0BYKxCMDm8ERmfex9fzRl7lOAh08c8jKAZl1qZeHg6B0BGacIctQUgXvID5WdwEl9q14aJ4x5PCO0Ig5eBohzzMQVved8Dm13GtMgvugUKh5Gi4OZ7i1gWCiclgc1dzMgcc2scV81YO3APBO3Yx3HdnEIIYf0fgctp0LDBQHuz5oL0QU+91WWSsQ2KCz5y6YkmgxUCWFKrVFwojK3AmHJ61Wh2vfR8QZkYmlUtp8E1aBNlZZF06b9YiYx6wWYuUMJsEOZpgdyadp/qbtQipCgHvMnuTIEcT7CSfO20Hrb3wjY1HjkeCShpPPrdT9ntIIGfebIjkhda5jpGxkvks1TW5NRZb2fFZCi2mQ9cMmJ82tWHQsuyckjlskTHtUCzluyMunqhD2BMzCFMl16jjCdKHLYJ0f07JHAapaYfrCEq1mO+OU8mR1Hl2oQBjF4XGBgbPY0nKViyZb8Zx3e+We8C1kjkMMkc7NYUDh2UdpA7cPB1ngWNzgWtUm9GSOQyyjw0FwFwyuxTGwlgPIO5FS+YwiPe2cm0vtaEQDJnJx/4DQRu1U92odsoR1zjVHSYXTqkINjaUab2HoDWAtU51z3zcFj0zbLnCIU51iafT8tywFyh6KLqPU91hc732LxxRoChAacklT3WHvlv/i7KFU90QiDVZAvn6eTjVnQVSAvGb9eU8nOp2gbRmrYPdb8XIwQSbO/AfBRxTm6K7DKQAAAAASUVORK5CYII=';

var weatherIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADdElEQVRoQ+2Zi20UMRCG/1QAHUAHQAWECoAKgAqACoAKgAogFQAVABWQVACpIEkFoO/kOTmLH2Ov9y46raVTLlnveL55eewc6UDG0YFwaAW5aZ4c4ZFfAerBPuFGgPwNACNkddtixOIrSLf5Ey/mPPJQ0pmkS8diLR65LemepJ8OuU1TUiDHkr5LOpX0yAHjBQECufclvZb0oUnTyuQUCAv+CJbzwDCHgYK5EUPgaYzl8babNRdarTClBReHYPFS1RoBsxOIGgjPYxg2PAuju5IeS3oiie/M4xmfj5L+ROHGhrlIOMVh4NlHUBJlDeKNpLeV4CWR34U8IHcAG5oT0/U9IPE7nyQ9D3/A8p8jQBR+JelZeD68MpWM1wKClV9KugpVxzw0lQ8QHuNjc4CjUvHMqhteojryOXGXp8xELwih9TvIiHOltj459D6EZmkuUC8CVE1m8rkXxLxBOBE+ngGAzT0PGyDWjwsGoMy5EwQCQ7g2Dy8IlYeQ8HrDwFHIkyvAEIq3gmeaYQC5COVzagUsZ2cMbxuCDKz8pSMMMRQeA8ZrsK3OgFAWeXk6qP2WmC0g5BI55fHEdE08Q0gCRJ/nHt7QQjAdMcL5nhuUZko0OQFMzyDxyZkmr3hBLOYpk7aPpJQktim1Pd4webFX+Btlm2GdAzr8Z0wviLf8thaFlDEIZ7sHyHkUEIy13cu8IAg0r5BThFhqQ2zJpVLYEV549+ukc7ByTU5f06MFhIURTLPIeBp+jxUaBVKCpPfDqITwFsYDMm0azTM0hdY8IhRr8WE0JWpPRQgeY91NhauBxOeJWDnimNDiJ3vGtEJ179ANUOhGCBJmRZDaocjO9qz9LWpBGnSZPZWI4FhxUjrq2kVB6lAEJBsfP3dh/RyxVbjT3OVDCQKhZgk8YXkx27ydAjYFJgVivVLpeGr7RW2n79St6bUsCFKAoRrkjqe7KLMeGguts1rVygm7KSDVZK9Zg9LL1ec+QysuONV9JAdklmCnZ4ffx7CLEO6Rj3tDK96Mdl1+WZszC104FyGb66ZeECsIdhLEM7Quw2/ZI1ejMH0ebT4w125z5oAYDF1q6oS5ZLhhMDxiN5pD/quLdbASJZsCsNRgX6PIYLjug9VSyg2TOze0hikyV9AKMteCo99fPTLaonPlrR6Za8HR7x+MR/4BTQPNkGRFrxQAAAAASUVORK5CYII=';

var attractionsIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADd0lEQVRoQ+1a7bENQRA9LwJEgAgQASJABIgAESACRMCLABEgAkSACBABdarmVLU2vdOzs/t2VJk/7955Mzt9pr9O990T5MdHAFfN8jcA7gCI5t8BuFFZzynt+QTgPYAXAL7mRfl75UnH5l+VtdzfO8/H1PY8B/CoQ54/lq4BYoVf89kCuV+0drdI9QoA57rH0UB0/m0ABHEOwFMAT3qRzAKEchPM6wLgcq/PzASEGKgVmtkpgHs9WpkNyCUAX9ZoZTYgViuMYIxkqTEjEPkKc8y1FAoAMwKx4fkCgB8ZMLMCYba/DuBmyfxNLKNAGCblnDY5RvM6T5k9Op955HFPTlkLRDemm3pb8kA07wVvAWHofQlAz91NI+dLzL9VDuPBtOVovhcIySZJ5wdHPENAazXSvCG3oBcIWTYZMhkxzbQ5ZgViI1dKxtSich2yf8Z2xvjs0O1aM2n5yK5AmGUf9ESSglQRiMXTwzJ3KBDLg7JaoTbotAwCltG2gOzq7LxM3S4jFMtcmls0LAirjYzZ6Jw0C+7xEQksqs3vNBUK6QdNUISvJsySRqg9Jln+zWq+i2tZYXVjnPMsleCelcW1ak8m+g0AP/vB4orEMZ1D+IA1GtHByr40M5I7je/lNll7U3t+LNk/szmf+7OATBHGUSCRra91ZAuCYHtC/JBGtgQyBGJUI0p0n13jjrTi4oKjetPSd8qTpu3eXkd8JLL1Vi3h97FjSfK5qg0kQEcAUVRTWFZwSFeDtcQ1AsQL5PNM1DzwRZOCw2FAoiquVd35/x9uWlsBsfmIfCydO6yJjZiWqIpPfJHJ6VwFA3I1aoODOeNKhSXU3KE6NwIkik4t5lrbp15WuiLcMvxuCYRyKf9YTU2tETJbkkXfcVfh5il/CsyIaUVhU+zWk0kJFHGxlkkuAtoCSO0ZS8Qx+h/rDybH6AL+GSARCT0z09pKI/+BjNL4NX7QuvVWURaa2UzO3gK5m7MzuvDnZJ8PVHBFzQXREd8hUfj1hdruzr51Zj8sj9TIH29PbDZq54i2eyrS/ZvIVuw3ovGtHvFa+r+bj8gUPGMVl4oaCdGvtnpj6MxJo2WsqklkHpGj61YVKCS0wLExR6rSPUbCLw+z74/Yw1u3aluudl/XSwJb+YieQy1QMPayqAl+rrVK/S1zHfdqH30r/aaDf9hvXaxyQie1SUMAAAAASUVORK5CYII=';

var landmarkIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADeUlEQVRoQ92Z67EPQRDFz40AESACRIAIEAEiQASIABEgAkSACBABIkAE1K9qj+q7Nbvz2J7ymC93a/9zp/t0n37Nnmj+erSI8N8pEk+mnHr60P8GyLsF17WZRpvlkQ+SLm8o/lrSrWxQs4D8rCiaLjf9wAWAgazP33p/2EEzgOzRygqn02sGkBqtDCZVduphFVoZwBR6zQRS432q7NTDFs2pG1crKN5IullD2vP7DCDIp5o/lPR4eebdfUlPJD1bnnv0rO6dBeSppHuS7kp6ESr7W0nvJaVX+VlATK/rktyiUOlJzR8lXamauHPDLCCuJRclfQk6TclYnD8LyJbC3yWdkXROEs9pawYQU+hToXEsUS4FzAwgpNVXkkop1kkgZrO/Fkgp9VpZp+CXku6kIFgOmeERGsIby8zBc1ykXVJweuaaAeSbpLOS1hnrn+q1Lkj6LOmrJJ5LC29ckhRrzGGWZXsE3j/fCHQrOyXgs4HQjtyW9EASCpeWs1pqq5INpBYfACN+2JdakDOAUADJRCg4sqjwxAuxM7yygNBbHVk0kX8cCADcQ/Uo5FZmL8M1GyfDIwhzkDcLDhtTqnwWEFfzESApY28GEBdBQLg997sfIQmYfq74MXttdQHNhskA4iYxUqTUHJZqjN8d7oaPAsGqtCT8jYHuCZHLajeOLoSxYXTA4y28MjxsHQXiliRW6RKtTJE1vXjvYSteVDRTyhuPAsEbKB6V2Js5SvSyMZjt8crQOgLEVBkSvPFPkYpd5x4B0nLr3qXMkYFrFIjpk1KVF7RQ63ylc940zAiQmKmGqVDQyFQdymAjQBywW/MEQJnZUYwZ3V0xCpKhSMdU81KqdQbrvh/uBeK8j0FL1Zj7XgpkraUHBPtQOK7YJfQ0oN03jcwdWLlkMUZcX/HgLSZEewFl7R3iy58d8C6pOy6PwniHOaVp9XjE+Z7+CctFalg4v0EpX1xvKQEoKMb16dooeJPA57fmItkKhMNJt+viZ0vjKVYPHSJN1zcqsUhyZrV1aQXixrAU4KbbSOPnc0s0cuA3ndsCJAbg2nK2amzXmzgdNm1Nl76V3Eosp+S0ALHFS5OcY6M7XQYt9s5wqq8Gfg2IrVIKcHTJ+ExgGSXaxsDfvZmsAXF3W6PLkQ83cVLck7PbHdeA+J52T0DGjWGLnNKHo996/QL10N0zURcyagAAAABJRU5ErkJggg==';


var Trail = require('./Trail')
var Weather = require('./Weather')

const styles = StyleSheet.create({
  tabBar: {
    fontSize: 16
  }
});

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'trail'
    };
  }

	render() {
		return(
      <TabBarIOS barTintColor='#d9d9d9' selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'trail'}
          title="Overview"
          icon={{uri: mapIcon, scale: 2}}
          onPress={() => {
            this.setState({
              selectedTab: 'trail'
            });
          }}>
          <Trail />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          select={this.state.selectedTab === 'attractions'}
          title="Attractions"
          icon={{uri: attractionsIcon, scale: 2}}>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          select={this.state.selectedTab === 'landmarks'}
          title="Landmarks"
          icon={{uri: landmarkIcon, scale: 2}}>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'weather'}
          title="Weather"
          icon={{uri: weatherIcon, scale: 2}}
          onPress={() => {
            this.setState({
              selectedTab: 'weather'
            });
          }}>
          <Weather />
        </TabBarIOS.Item>
      </TabBarIOS>
		);
	}
}

module.exports = Tabs;
