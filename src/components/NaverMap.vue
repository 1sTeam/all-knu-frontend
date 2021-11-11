<template>
    <div>
        <main-template>
            <template slot="header">
            </template>
                <div id="naverMap" style="width:100%;height:100%;"/>
                
            <template slot="tab-bar">
            </template>
        </main-template>
    </div>
</template> 
<script>
//기본 양식
import MainTemplate from './MainTemplate.vue';
export default{
  components: { MainTemplate },
    name : 'NaverMap',
    data() {
        return {  
            map: null,
            markers : [],
            infoWindows : [],

            catMarkerDataList: {
                markerImage: "/images/cat-marker.png",
                list: [
                    {
                        latitude: 37.27585305107863,  
                        longtitude: 127.13068734472377,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "베이지",
                        describe: "인사관과 자취촌 사이에 사는 아깽이!"
                    },
                    {
                        latitude: 37.276958330609126, 
                        longtitude:  127.13430556378584,
                        images: [
                            "/images/cats/egong/egong1.jpg",
                        ],
                        title: "이공냥이",
                        describe: "이공관에 돌아다니는 냥이!"
                    },
                ],
            },
            emartMarkerDataList: {
                markerImage: "/images/emart-marker.png",
                list: [
                    {
                        latitude: 37.27833847979511, 
                        longtitude: 127.13351998109947,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "이마트 24",
                        describe: "심전 2관 1층 평일 9:00 ~ 23:00",
                    },
                ],
            },
            cuMarkerDataList: {
                markerImage: "/images/cu-marker.png",
                list: [
                    {
                        latitude: 37.276360721805034, 
                        longtitude: 127.1339214529605,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "CU",
                        describe: "경청관 B1층 평일 11:00 ~ 15:00",
                    },

                ],
            },
            smokeMarkerDataList: {
                markerImage: "/images/smoke-marker.png",
                list: [
                    {
                        latitude: 37.275101213214526,  
                        longtitude: 127.1298416257587,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "흡연구역",
                        describe: "샬롬관 503호 강의실 뒷문 밖",
                    },
                    {
                        latitude: 37.2771410736224,   
                        longtitude: 127.13398340388342,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "흡연구역",
                        describe: "이공관 정자 앞",
                    },
                ],
            },

            bankMarkerDataList: {
                markerImage: "/images/bank-marker.png",
                list: [
                    {
                        latitude: 37.27486047374001, 
                        longtitude: 127.12977252223762,
                        images: [
                            "/images/bank.png",
                        ],
                        title: "국민은행",
                        describe: "샬롬관 103호",
                    },
                ],
            },
            
            hospitalMarkerDataList: {
                markerImage: "/images/hospital-marker.png",
                list: [
                    {
                        latitude: 37.27487959759539, 
                        longtitude: 127.13035671268291,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "대학진료소",
                        describe: "샬롬관 100호",
                    },
                ],
            },
            
            cafeMarkerDataList: {
                markerImage: "/images/cafe-marker.png",
                list: [
                    {
                        latitude: 37.27583603104287,
                        longtitude:  127.13424218976382,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "CAFE 블룸즈버리",
                        describe: "천은관 B1층 중앙계단 앞 강아지도 있음!",
                    },
                ],
            },

        }
    },
    mounted() {
        var position=new naver.maps.LatLng(37.2762266,127.1327797);
        //지도
        var mapOptions = {
                center: position, // 초기위치
                zoom: 17
            };

        var map = new naver.maps.Map("naverMap", mapOptions); // 지도 생성
        this.map = map;
        
        

        
        //마커
        //고양이 마커, 인포윈도우 그리기
        this.catMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.catMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });
        //이마트 마커 그리기
        this.emartMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.emartMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });

        //뱅크 마커 그리기
        this.bankMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.bankMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });
        //씨유 마커 그리기
        this.cuMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.cuMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });
        //스모크 마커 그리기
        this.smokeMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.smokeMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });

        //병원 마커 그리기
        this.hospitalMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.hospitalMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });

         //카페 마커 그리기
        this.cafeMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.cafeMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });
        
        
        for (var i=0, ii=this.markers.length; i<ii; i++) {
            console.log(this.markers[i] , this.getClickHandler(i));
            naver.maps.Event.addListener(this.markers[i], 'click', this.getClickHandler(i)); // 클릭한 마커 핸들러
        }

        //const catMarker = this.createMarker(new naver.maps.LatLng(37.27586971359925, 127.1305904314565), "/images/cat-marker.png");

    },
    methods: {
        createMarker(position, markerImageUrl) { //const marker = createMarker(new naver.maps.LatLng(37.27586971359925, 127.1305904314565), "/images/cat-marker.png");
            const markerOptions = {
                position: position,
                map: this.map,
                icon: {
                    url: markerImageUrl,
                    size: new naver.maps.Size(59, 98),
                    origin: new naver.maps.Point(0, 0),
                    anchor: new naver.maps.Point(25, 26)
                }
            }
            return new naver.maps.Marker(markerOptions);
        },
        createInfoWindows(title, describe, images){
            return new naver.maps.InfoWindow({
                maxWidth:300,
                
                disableAnchor: false,
                borderWidth:0,
                borderRadious:30,
                content: 
                '<div style =" border-radius: 30px; padding:10px"><b><img src="'+images+'"sizes= max-width:150;></b><b>' + title +'<br>' +describe+ '</b><br> </div>'
            }); // 클릭했을 때 띄워줄 정보 입력
        },
        
        getClickHandler(seq){
            const marker = this.markers[seq], infoWindow = this.infoWindows[seq];
            const map = this.map;

            return function(e) {  // 마커를 클릭하는 부분
                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker); // 표출
                }
    		}
            return 
        }

    }
}
</script>
<style scoped>

    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
    }
</style>