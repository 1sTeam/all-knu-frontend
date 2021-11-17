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
                        
                        latitude: 37.27529158077367, 
                        longtitude: 127.12993608083103,
                        images: [
                            "/images/cats/beige/beige1.png",
                        ],
                        title: "베이지",
                        describe: "인사관과 자취촌 사이서 밥먹는 아깽이!"
                    },
                    {
                        latitude: 37.27688562436725, 
                        longtitude: 127.13446531767191,
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
                        latitude: 37.27851608617131,  
                        longtitude: 127.13389172871732,
                        images: [
                            "/images/emart/emart1.jpg",
                        ],
                        title: "이마트 24",
                        describe: "심전 2관 1층 <br>평일 9:00 ~ 23:00",
                    },
                ],
            },
            cuMarkerDataList: {
                markerImage: "/images/cu-marker.png",
                list: [
                    {
                        latitude: 37.27672228593483, 
                        longtitude: 127.13386585302052,
                        images: [
                            "/images/cu/cu1.jpg",
                        ],
                        title: "CU",
                        describe: "경청관 B1층 <br>평일 11:00 ~ 15:00",
                    },

                ],
            },
            gsMarkerDataList: {
                markerImage: "/images/gs-marker.png",
                list: [
                    {
                        latitude: 37.274941446256875,
                        longtitude:  127.12968952176682,
                        images: [
                            "/images/gs/gs1.jpg",
                        ],
                        title: "GS25",
                        describe: "샬롬관 B1층 <br>평일 11:00 ~ 15:00",
                    },

                ],
            },
            smokeMarkerDataList: {
                markerImage: "/images/smoke-marker.png",
                list: [
                    {
                        latitude: 37.27545381952122, 
                        longtitude: 127.13062209315156,
                        images: [
                            "/images/smoke/shalom.jpg",
                        ],
                        title: "흡연구역",
                        describe: "샬롬관 503호 강의실 뒷문 밖",
                    },
                    {
                        latitude: 37.2771410736224,   
                        longtitude: 127.13398340388342,
                        images: [
                            "/images/smoke/egong.jpg",
                        ],
                        title: "흡연구역",
                        describe: "이공관 정자 앞",
                    },
                    {
                        latitude: 37.27526436428007, 
                        longtitude: 127.13416398985198,
                        images:[
                            "/images/smoke/cheon.jpg",

                        ],
                        title: "흡연구역",
                        describe: "천은관 오른쪽 정자 앞"
                    }
                ],
            },

            bankMarkerDataList: {
                markerImage: "/images/bank-marker.png",
                list: [
                    {
                        latitude: 37.27472713898666, 
                        longtitude: 127.12977252223762,
                        images: [
                            "/images/bank/bank1.png",
                        ],
                        title: "국민은행",
                        describe: "샬롬관 103호<br> ATM기는 엘베 맞은편",
                    },
                ],
            },
            
            clinicMarkerDataList: {
                markerImage: "/images/clinic-marker.png",
                list: [
                    {
                        latitude: 37.27487959759539, 
                        longtitude: 127.13035671268291,
                        images: [
                            "/images/clinic/clinic1.jpg",
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
                            "/images/cafe/cafe1.png",
                        ],
                        title: "CAFE 블룸즈버리",
                        describe: "천은관 B1층 중앙계단 앞 <br> 블랙시바견도 있답니다!",
                    },
                ],
            },
            healthMarkerDataList: {
                markerImage: "/images/health-marker.png",
                list: [
                    {
                        latitude: 37.27816180225889, 
                        longtitude:  127.13370397408181,
                        images: [
                            "/images/health/health1.jpg",
                        ],
                        title: "심전헬스센터",
                        describe: "심전2관 1층 <br> 평일 10:00 ~ 20:00 <br>기숙사생: 무료 <br>&nbsp&nbsp&nbsp&nbsp재학생: 10만원/달",
                    },
                ],
            },
            bookMarkerDataList: {
                markerImage: "/images/book-marker.png",
                list: [
                    {
                        latitude: 37.27543042678893,
                        longtitude: 127.13116128971119,
                        images: [
                            "/images/book/book1.jpg",
                        ],
                        title: "서점/문구점",
                        describe: "인사관 106호 <br> 전공책과 문구류를 판매<br>평일 9:00 ~ 17:00",
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
        //지에스 마커그리기
        this.gsMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.gsMarkerDataList.markerImage);
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
        this.clinicMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.clinicMarkerDataList.markerImage);
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
         //헬스 마커 그리기
        this.healthMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.healthMarkerDataList.markerImage);
            const infoWindow= this.createInfoWindows(row.title, row.describe, row.images);
            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });
        //서점 마커 그리기
        this.bookMarkerDataList.list.map(row => {
            const marker = this.createMarker(new naver.maps.LatLng(row.latitude, row.longtitude), this.bookMarkerDataList.markerImage);
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
                borderWidth:0,
                anchorSize:new naver.maps.Size(0, 0),
                pixelOffset:140,
                maxWidth:300,
                
                backgroundColor: (0,0,0,0),

                content: 
                '<div style="background-color:white;border-radius:10px;box-shadow:0px 5px 5px  rgb(0, 0, 0, 0.5);display:flex;  flex-direction:row; width:300px; height:150px;">'+
                    '<div><img src="'+images+'"style= "border-bottom-left-radius:10px;border-top-left-radius:10px;box-shadow:4px 0px 4px rgb(87, 107, 202,0.25)  ; width:140px; height:100%;object-fit:cover;"></div>'+
                    '<div style="display:flex; flex-direction:column; padding:7% 4%;"><span style="font-size:15px; font-weight:bold;">'+title+'</span><br><span style="font-size:12px;">'+describe+'</sapn></div>'+
                '</div>'
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