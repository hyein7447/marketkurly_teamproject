<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마켓컬리 | 뷰티컬리</title>
    <!-- favicon -->
    <link rel="shortcut icon" href="./images/main/logo/logo_favicon.png" type="image/x-icon">
    <link rel="icon" href="./images/main/logo/logo_favicon.png" type="image/x-icon">
    <!-- styles -->
    <link rel="stylesheet" href="./styles/reset.css">
    <link rel="stylesheet" href="./styles/header.css">
    <link rel="stylesheet" href="./styles/header_m.css">
    <!-- font-family -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="user_page">
            <a href="./join.html" class="join">회원가입</a>
            <a href="./login.html" class="login">로그인</a>
            <div class="cs_bg">
                <a href="#" class="cs">고객센터<img src="./images/main/icon/icon_down_16x10.png" alt="고객센터오픈"></a>
                <div class="cs_open"> <!-- 마우스오버 js -->
                    <a href="./notice.html">공지사항</a>
                    <a href="#">자주하는 질문</a>
                    <a href="#">1:1 문의</a>
                    <a href="#">대량주문 문의</a>
                </div>
            </div>
        </div>
        <div class="header_top">
            <div class="left">
                <a href="./index.html" class="logo"><img src="./images/main/logo/logo_marketkulry.svg" alt="마켓컬리"></a>
                <div class="menu">
                    <a href="#">마켓컬리</a>
                    <a href="#">뷰티컬리</a>
                </div>
            </div>
            <div class="search">
                <input type="text" id="user_search" placeholder="검색어를 입력해주세요">
                <button type="button" id="search_btn"><img src="./images/main/icon/search_btn.png" alt="검색하기"></button>
            </div>
            <div class="user_info">
                <div class="map">
                    <a class="map_icon"><img src="./images/main/icon/icon_map_off.svg" alt="주소찾기"></a>
                    <div class="map_open"> <!-- map 마우스 오버 시 오픈 JS -->
                        <p><em>배송지를 등록</em>하고<br>
                        구매 가능한 상품을 확인하세요!</p>
                        <div class="map_btn">
                            <button type="button" id="map_login_btn">로그인</button>
                            <div class="address_btn">
                                <input type="button" onclick="exec_daum_postcode()" value="      주소검색" class="map_search_btn">
                                <img src="./images/main/icon/map_search_btn.png" alt="주소찾기">
                            </div>
                        </div>
                    </div>
                </div>
                <a href="./wish.html" class="wish"><img src="./images/main/icon/icon_wish_off.svg" alt="위시리스트"></a>
                <a href="./cart.html" class="cart"><img src="./images/main/icon/icon_cart_off.svg" alt="장바구니"></a>
            </div>
        </div>
        <div class="header_btm">
            <nav>
                <div class="category_bg">
                    <a href="#" class="category"><img src="./images/main/icon/icon_menu_off.svg" alt="카테고리">카테고리</a>
                    <div class="gnb_bg"> <!-- 마우스 오버시 출력 JS -->
                        <div class="gnb_wrap">
                            <ul class="gnb">
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon">
                                        <img src="./images/main/icon/category/cate_1_off.png" alt="2024 설 선물세트">
                                        <span>2024 설 선물세트</span>
                                    </a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">프리미엄</a>
                                                <a href="#">예약 선물세트</a>
                                                <a href="#">뷰티</a>
                                                <a href="#">건강식품</a>
                                                <a href="#">오일·가공</a>
                                                <a href="#">베이커리·다과</a>
                                                <a href="#">과일·견과</a>
                                                <a href="#">정육</a>
                                                <a href="#">수산</a>
                                                <a href="#">커피·차·전통주</a>
                                                <a href="#">주방·생활</a>
                                                <a href="#">골드바</a>
                                                <a href="#">와인</a>
                                                <a href="#">단독 특가</a>
                                                <a href="#">트렌드·이색</a>
                                                <a href="#">실속 선물</a>
                                                <a href="#">빅세일</a>
                                                <a href="#">20만원이상</a>
                                                <a href="#">10-20만원</a>
                                                <a href="#">7-10만원</a>
                                                <a href="#">5-7만원</a>
                                                <a href="#">5만원 미만</a>
                                                <a href="#">카드사 쿠폰 적용 상품</a>
                                                <a href="#">컬리 카드 쿠폰 적용 상품</a>
                                                <a href="#">컬리 상품권</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_2_off.png" alt="채소"><span>채소</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">친환경</a>
                                                <a href="#">고구마·감자·당근</a>
                                                <a href="#">시금치·쌈채소·나물</a>
                                                <a href="#">브로콜리·파프리카·양배추</a>
                                                <a href="#">양파·대파·마늘·배추</a>
                                                <a href="#">오이·호박·고추</a>
                                                <a href="#">냉동·이색·간편채소</a>
                                                <a href="#">콩나물·버섯</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_3_off.png" alt="과일·견과·쌀"><span>과일·견과·쌀</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">친환경</a>
                                                <a href="#">제철과일</a>
                                                <a href="#">국산과일</a>
                                                <a href="#">수입과일</a>
                                                <a href="#">간편과일</a>
                                                <a href="#">냉동·건과일</a>
                                                <a href="#">견과류</a>
                                                <a href="#">쌀·잡곡</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_4_off.png" alt="수산·해산·건어물"><span>수산·해산·건어물</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">제철수산</a>
                                                <a href="#">생선류</a>
                                                <a href="#">굴비·반건류</a>
                                                <a href="#">연어·참치</a>
                                                <a href="#">회·탕류</a>
                                                <a href="#">오징어·낙지·문어</a>
                                                <a href="#">해산물·전복·조개류</a>
                                                <a href="#">새우·게·랍스터</a>
                                                <a href="#">수산가공품</a>
                                                <a href="#">명란</a>
                                                <a href="#">젓갈·장류</a>
                                                <a href="#">간편구이</a>
                                                <a href="#">김·미역·해조류</a>
                                                <a href="#">멸치·황태·다시팩</a>
                                                <a href="#">조미오징어·어포·쥐포</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_5_off.png" alt="정육·가공육·계란"><span>정육·가공육·계란</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">국내산 소고기</a>
                                                <a href="#">수입산 소고기</a>
                                                <a href="#">국내산 돼지고기</a>
                                                <a href="#">수입산 돼지고기·양고기</a>
                                                <a href="#">닭·오리고기</a>
                                                <a href="#">식단관리용 가공육</a>
                                                <a href="#">양념육</a>
                                                <a href="#">돈까스·떡갈비·함박</a>
                                                <a href="#">소시지·베이컨·하몽</a>
                                                <a href="#">계란·가공란</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_6_off.png" alt="국·반찬·메인요리"><span>국·반찬·메인요리</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">국·탕·찌개</a>
                                                <a href="#">밑반찬</a>
                                                <a href="#">김치·젓갈·장류</a>
                                                <a href="#">두부·어묵·부침개</a>
                                                <a href="#">메인요리</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_7_off.png" alt="간편식·밀키트·샐러드"><span>간편식·밀키트·샐러드</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">밀키트</a>
                                                <a href="#">샐러드·샌드위치</a>
                                                <a href="#">선식·시리얼</a>
                                                <a href="#">도시락·밥류</a>
                                                <a href="#">짜장·짬뽕·파스타·면류</a>
                                                <a href="#">떡볶이·튀김·순대</a>
                                                <a href="#">치킨·피자·핫도그·만두</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_8_off.png" alt="면·양념·오일"><span>면·양념·오일</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">라면</a>
                                                <a href="#">파스타·면류·조리용 떡</a>
                                                <a href="#">밀가루·가루·믹스</a>
                                                <a href="#">햄·통조림·병조림</a>
                                                <a href="#">죽·스프·카레</a>
                                                <a href="#">양념·액젓·장류</a>
                                                <a href="#">식용유·참기름·오일</a>
                                                <a href="#">식초·소스·드레싱</a>
                                                <a href="#">소금·설탕·향신료</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate"> 
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_9_off.png" alt="생수·음료·커피"><span>생수·음료·커피</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">생수·탄산수</a>
                                                <a href="#">음료·주스</a>
                                                <a href="#">원두·드립백</a>
                                                <a href="#">캡슐·인스턴트 커피</a>
                                                <a href="#">차</a>
                                                <a href="#">커피용품</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_10_off.png" alt="간식·과자·떡"><span>간식·과자·떡</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_11_off.png" alt="베이커리"><span>베이커리</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">잼·스프레드</a>
                                                <a href="#">식빵·모닝빵·베이글</a>
                                                <a href="#">간식빵</a>
                                                <a href="#">타르트·파이</a>
                                                <a href="#">디저트</a>
                                                <a href="#">케이크</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_12_off.png" alt="유제품"><span>유제품</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">우유·두유</a>
                                                <a href="#">요거트·생크림</a>
                                                <a href="#">자연치즈</a>
                                                <a href="#">가공치즈</a>
                                                <a href="#">버터</a>
                                                <a href="#">아이스크림</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_13_off.png" alt="건강식품"><span>건강식품</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">비타민·미네랄</a>
                                                <a href="#">건강즙·건강음료</a>
                                                <a href="#">홍삼·인삼</a>
                                                <a href="#">꿀·과일청</a>
                                                <a href="#">영양제</a>
                                                <a href="#">유산균</a>
                                                <a href="#">건강분말·건강환</a>
                                                <a href="#">체중관리</a>
                                                <a href="#">프로틴</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_14_off.png" alt="와인·위스키"><span>와인·위스키</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">레드와인</a>
                                                <a href="#">화이트·로제와인</a>
                                                <a href="#">샴페인·스파클링</a>
                                                <a href="#">스위트와인</a>
                                                <a href="#">위스키·리큐르</a>
                                                <a href="#">논알콜</a>
                                                <a href="#">와인·위스키용품</a>
                                                <a href="#">아티제 픽업</a>
                                                <a href="#">레드텅 와인샵 픽업</a>
                                                <a href="#">와인픽스 와인샵 픽업</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_15_off.png" alt="전통주"><span>전통주</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">막걸리·탁주</a>
                                                <a href="#">증류주·약주·청주</a>
                                                <a href="#">과실주·리큐르</a>
                                                <a href="#">전통주 선물세트</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_16_off.png" alt="주방용품"><span>주방용품</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">일회용품·주방잡화</a>
                                                <a href="#">주방·조리도구</a>
                                                <a href="#">냄비·팬·솥</a>
                                                <a href="#">식기·그릇</a>
                                                <a href="#">컵·잔·물병</a>
                                                <a href="#">밀폐·보관·저장용기</a>
                                                <a href="#">커트러리</a>
                                                <a href="#">주방수납정리</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_17_off.png" alt="생활용품·리빙"><span>생활용품·리빙</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">화장지·물티슈</a>
                                                <a href="#">세제</a>
                                                <a href="#">탈취·제습·방충제</a>
                                                <a href="#">청소용품</a>
                                                <a href="#">욕실용품</a>
                                                <a href="#">세탁용품</a>
                                                <a href="#">수납정리용품</a>
                                                <a href="#">의약외품·마스크</a>
                                                <a href="#">여성·위생용품</a>
                                                <a href="#">패션잡화</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_18_off.png" alt="가전제품"><span>가전제품</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">주방가전</a>
                                                <a href="#">생활가전</a>
                                                <a href="#">계절가전</a>
                                                <a href="#">디지털·PC</a>
                                                <a href="#">대형·설치가전</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_19_off.png" alt="가구·인테리어"><span>가구·인테리어</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">거실가구</a>
                                                <a href="#">소파·체어</a>
                                                <a href="#">침실가구</a>
                                                <a href="#">주방가구</a>
                                                <a href="#">서재가구</a>
                                                <a href="#">화장대·콘솔</a>
                                                <a href="#">매트리스·토퍼</a>
                                                <a href="#">홈데코</a>
                                                <a href="#">조명·거울</a>
                                                <a href="#">러그·커튼</a>
                                                <a href="#">침구</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_20_off.png" alt="유아동"><span>유아동</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">분유·간편 이유식</a>
                                                <a href="#">이유식 재료</a>
                                                <a href="#">간식·음식</a>
                                                <a href="#">건강식품</a>
                                                <a href="#">이유·수유용품</a>
                                                <a href="#">기저귀·물티슈</a>
                                                <a href="#">세제·위생용품</a>
                                                <a href="#">스킨·구강케어</a>
                                                <a href="#">완구·잡화류</a>
                                                <a href="#">유아동패션</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_21_off.png" alt="스포츠·레져·캠핑"><span>스포츠·레져·캠핑</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">골프</a>
                                                <a href="#">구기·라켓</a>
                                                <a href="#">러닝·자전거</a>
                                                <a href="#">시즌스포츠</a>
                                                <a href="#">휘트니스</a>
                                                <a href="#">캠핑</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_22_off.png" alt="반려동물"><span>반려동물</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">강아지 간식·영양제</a>
                                                <a href="#">강아지 주식</a>
                                                <a href="#">고양이 간식·영양제</a>
                                                <a href="#">고양이 주식</a>
                                                <a href="#">배변용품</a>
                                                <a href="#">미용·목욕용품</a>
                                                <a href="#">펫 의류·외출용품</a>
                                                <a href="#">급식기·급수기</a>
                                                <a href="#">하우스용품</a>
                                                <a href="#">장난감</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_23_off.png" alt="럭셔리뷰티"><span>럭셔리뷰티</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">스킨케어</a>
                                                <a href="#">메이크업</a>
                                                <a href="#">바디케어</a>
                                                <a href="#">헤어케어</a>
                                                <a href="#">프레그런스</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_24_off.png" alt="스킨케어·메이크업"><span>스킨케어·메이크업</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">스킨·미스트·패드</a>
                                                <a href="#">에센스·앰플·로션</a>
                                                <a href="#">크림·오일</a>
                                                <a href="#">클렌징</a>
                                                <a href="#">마스크팩</a>
                                                <a href="#">선케어</a>
                                                <a href="#">베이스메이크업</a>
                                                <a href="#">립메이크업</a>
                                                <a href="#">아이메이크업</a>
                                                <a href="#">맨즈케어</a>
                                                <a href="#">뷰티소품·기기</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_25_off.png" alt="헤어·바디·구강"><span>헤어·바디·구강</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#">구강·면도</a>
                                                <a href="#">샴푸·컨디셔너</a>
                                                <a href="#">트리트먼트·팩</a>
                                                <a href="#">헤어에센스·염모</a>
                                                <a href="#">바디워시·스크럽</a>
                                                <a href="#">바디로션·크림</a>
                                                <a href="#">핸드·립·데오</a>
                                                <a href="#">향수·디퓨저</a>
                                                <a href="#">헤어·바디소품</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_26_off.png" alt="컬리상품권"><span>컬리상품권</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="gnb_cate gnb_cate27 ">
                                    <a href="#" class="gnb_icon"><img src="./images/main/icon/category/cate_27_off.png" alt="컬리의 추천"><span>컬리의 추천</span></a>
                                    <div class="lnb_bg">
                                        <div class="lnb_wrap">
                                            <div class="lnb">
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_001.png" alt="홈캉스">홈캉스</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_002.jpg" alt="식단관리">식단관리</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_003.jpg" alt="간편한 아침식사">간편한 아침식사</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_004.png" alt="재구매BEST">재구매BEST</a>
                                                <a href=""><img src="./images/main/icon/category/cate_kulry_005.png" alt="3천원의 행복">3천원의 행복</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_006.jpg" alt="컬리마트">컬리마트</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_007.png" alt="대용량 상품">대용량 상품</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_008.png" alt="캠핑">캠핑</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_009.jpg" alt="1인가구">1인 가구</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_010.png" alt="비건">비건</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_011.png" alt="베이커리 맛집">베이커리 맛집</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_012.png" alt="오프라인 맛집">오프라인 맛집</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_013.png" alt="컬리가 만든 상품">컬리가 만든 상품</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_014.png" alt="Kulry Only">Kulry Only</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_015.png" alt="KF365 / KS365">KF365 / KS365</a>
                                                <a href="#"><img src="./images/main/icon/category/cate_kulry_016.png" alt="희소가치 프로젝트">희소가치 프로젝트</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="theme">
                    <li><a href="./new.html">신상품</a></li>
                    <li><a href="./best.html">베스트</a></li>
                    <li><a href="frugal.html">알뜰쇼핑</a></li>
                    <li><a href="#">특가/혜택</a></li>
                </ul>
                <a href="./today_delivery.html" class="delivery">
                    <span><em>샛별·하루</em> 배송안내</span>
                </a>
            </nav>
        </div>
        <div class="m_header">
            <div class="top">
                <a href="./index.html" class="logo">
                    <img src="./images/main/logo/logo_marketkulry_w.png" alt="마켓컬리">
                </a>
                <div class="title">
                    <a href="#">마켓컬리</a>
                    <a href="#">뷰티컬리</a>
                </div>
                <div class="user_icon">
                    <div class="map"> <!-- icon bg 삽입 -->
                        <input type="button" onclick="exec_daum_postcode()" value=" " class="map_search_btn">
                    </div>
                    <a href="./cart.html" class="cart"><img src="./images/main/icon/icon_cart_w.png" alt="장바구니 바로가기"></a>
                    <a href="./wish.html" class="wish"><img src="./images/main/icon/icon_wish_w.png" alt="위시리스트 바로가기"></a>
                </div>
            </div>
            <div class="menu">
                <a href="#">컬리추천</a>
                <a href="./new.html">신상품</a>
                <a href="./best.html">베스트</a>
                <a href="./frugal.html">알뜰쇼핑</a>
                <a href="./today_delivery.html" class="delivery">
                    <span><em>샛별·하루</em> 배송안내</span>
                </a>
            </div>
            <div class="btm_menu">
                <a href="./index.html"><img src="./images/main/icon/icon_home.svg" alt="홈으로가기"></a>
                <a href="#" class="cate"><img src="./images/main/icon/icon_menu.svg" alt="카테고리 열기"></a>
                <a href="#"><img src="./images/main/icon/icon_search.svg" alt="검색하기"></a>
                <a href="./login.html"><img src="./images/main/icon/icon_user.svg" alt="마이페이지"></a>
            </div>
            <div class="m_nav">
                <div class="gnb_bg"> <!-- 마우스 오버시 출력 JS -->
                    <div class="gnb_wrap">
                        <div class="gnb_header">
                            <h2>카테고리</h2>
                            <div class="user_icon">
                                <div class="map"> <!-- icon bg 삽입 -->
                                    <input type="button" onclick="exec_daum_postcode()" value="" class="map_search_btn">
                                </div>
                                <a href="./cart.html" class="cart"><img src="./images/main/icon/icon_cart_w.png" alt="장바구니 바로가기"></a>
                                <a href="./wish.html" class="wish"><img src="./images/main/icon/icon_wish_w.png" alt="위시리스트 바로가기"></a>
                            </div>
                        </div>
                        <ul class="gnb">
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_1_off.png" alt="2024 설 선물세트">
                                        <span>2024 설 선물세트</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="설 선물세트 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">프리미엄</a>
                                            <a href="#">예약 선물세트</a>
                                            <a href="#">뷰티</a>
                                            <a href="#">건강식품</a>
                                            <a href="#">오일·가공</a>
                                            <a href="#">베이커리·다과</a>
                                            <a href="#">과일·견과</a>
                                            <a href="#">정육</a>
                                            <a href="#">수산</a>
                                            <a href="#">커피·차·전통주</a>
                                            <a href="#">주방·생활</a>
                                            <a href="#">골드바</a>
                                            <a href="#">와인</a>
                                            <a href="#">단독 특가</a>
                                            <a href="#">트렌드·이색</a>
                                            <a href="#">실속 선물</a>
                                            <a href="#">빅세일</a>
                                            <a href="#">20만원이상</a>
                                            <a href="#">10-20만원</a>
                                            <a href="#">7-10만원</a>
                                            <a href="#">5-7만원</a>
                                            <a href="#">5만원 미만</a>
                                            <a href="#">카드사 쿠폰 적용 상품</a>
                                            <a href="#">컬리 카드 쿠폰 적용 상품</a>
                                            <a href="#">컬리 상품권</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_2_off.png" alt="채소">
                                        <span>채소</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="채소 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">친환경</a>
                                            <a href="#">고구마·감자·당근</a>
                                            <a href="#">시금치·쌈채소·나물</a>
                                            <a href="#">브로콜리·파프리카·양배추</a>
                                            <a href="#">양파·대파·마늘·배추</a>
                                            <a href="#">오이·호박·고추</a>
                                            <a href="#">냉동·이색·간편채소</a>
                                            <a href="#">콩나물·버섯</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_3_off.png" alt="과일·견과·쌀">
                                        <span>과일·견과·쌀</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="과일·견과·쌀 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">친환경</a>
                                            <a href="#">제철과일</a>
                                            <a href="#">국산과일</a>
                                            <a href="#">수입과일</a>
                                            <a href="#">간편과일</a>
                                            <a href="#">냉동·건과일</a>
                                            <a href="#">견과류</a>
                                            <a href="#">쌀·잡곡</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_4_off.png" alt="수산·해산·건어물">
                                        <span>수산·해산·건어물</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="수산·해산·건어물 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">제철수산</a>
                                            <a href="#">생선류</a>
                                            <a href="#">굴비·반건류</a>
                                            <a href="#">연어·참치</a>
                                            <a href="#">회·탕류</a>
                                            <a href="#">오징어·낙지·문어</a>
                                            <a href="#">해산물·전복·조개류</a>
                                            <a href="#">새우·게·랍스터</a>
                                            <a href="#">수산가공품</a>
                                            <a href="#">명란</a>
                                            <a href="#">젓갈·장류</a>
                                            <a href="#">간편구이</a>
                                            <a href="#">김·미역·해조류</a>
                                            <a href="#">멸치·황태·다시팩</a>
                                            <a href="#">조미오징어·어포·쥐포</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_5_off.png" alt="정육·가공육·계란">
                                        <span>정육·가공육·계란</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="정육·가공육·계란 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">국내산 소고기</a>
                                            <a href="#">수입산 소고기</a>
                                            <a href="#">국내산 돼지고기</a>
                                            <a href="#">수입산 돼지고기·양고기</a>
                                            <a href="#">닭·오리고기</a>
                                            <a href="#">식단관리용 가공육</a>
                                            <a href="#">양념육</a>
                                            <a href="#">돈까스·떡갈비·함박</a>
                                            <a href="#">소시지·베이컨·하몽</a>
                                            <a href="#">계란·가공란</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_6_off.png" alt="국·반찬·메인요리">
                                        <span>국·반찬·메인요리</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="국·반찬·메인요리 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">국·탕·찌개</a>
                                            <a href="#">밑반찬</a>
                                            <a href="#">김치·젓갈·장류</a>
                                            <a href="#">두부·어묵·부침개</a>
                                            <a href="#">메인요리</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_7_off.png" alt="간편식·밀키트·샐러드">
                                        <span>간편식·밀키트·샐러드</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="간편식·밀키트·샐러드 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">밀키트</a>
                                            <a href="#">샐러드·샌드위치</a>
                                            <a href="#">선식·시리얼</a>
                                            <a href="#">도시락·밥류</a>
                                            <a href="#">짜장·짬뽕·파스타·면류</a>
                                            <a href="#">떡볶이·튀김·순대</a>
                                            <a href="#">치킨·피자·핫도그·만두</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_8_off.png" alt="면·양념·오일">
                                        <span>면·양념·오일</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="면·양념·오일 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">라면</a>
                                            <a href="#">파스타·면류·조리용 떡</a>
                                            <a href="#">밀가루·가루·믹스</a>
                                            <a href="#">햄·통조림·병조림</a>
                                            <a href="#">죽·스프·카레</a>
                                            <a href="#">양념·액젓·장류</a>
                                            <a href="#">식용유·참기름·오일</a>
                                            <a href="#">식초·소스·드레싱</a>
                                            <a href="#">소금·설탕·향신료</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_9_off.png" alt="생수·음료·커피">
                                        <span>생수·음료·커피</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="생수·음료·커피 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">생수·탄산수</a>
                                            <a href="#">음료·주스</a>
                                            <a href="#">원두·드립백</a>
                                            <a href="#">캡슐·인스턴트 커피</a>
                                            <a href="#">차</a>
                                            <a href="#">커피용품</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_10_off.png" alt="간식·과자·떡">
                                        <span>간식·과자·떡</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="간식·과자·떡 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">과자·간식</a>
                                            <a href="#">쿠키·비스킷·크래커</a>
                                            <a href="#">초콜릿·젤리·캔디</a>
                                            <a href="#">떡·한과</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_11_off.png" alt="베이커리">
                                        <span>베이커리</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="베이커리 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">잼·스프레드</a>
                                            <a href="#">식빵·모닝빵·베이글</a>
                                            <a href="#">간식빵</a>
                                            <a href="#">타르트·파이</a>
                                            <a href="#">디저트</a>
                                            <a href="#">케이크</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_12_off.png" alt="유제품">
                                        <span>유제품</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="유제품 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">우유·두유</a>
                                            <a href="#">요거트·생크림</a>
                                            <a href="#">자연치즈</a>
                                            <a href="#">가공치즈</a>
                                            <a href="#">버터</a>
                                            <a href="#">아이스크림</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_13_off.png" alt="건강식품">
                                        <span>건강식품</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="건강식품 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">비타민·미네랄</a>
                                            <a href="#">건강즙·건강음료</a>
                                            <a href="#">홍삼·인삼</a>
                                            <a href="#">꿀·과일청</a>
                                            <a href="#">영양제</a>
                                            <a href="#">유산균</a>
                                            <a href="#">건강분말·건강환</a>
                                            <a href="#">체중관리</a>
                                            <a href="#">프로틴</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_14_off.png" alt="와인·위스키">
                                        <span>와인·위스키</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="와인·위스키 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">레드와인</a>
                                            <a href="#">화이트·로제와인</a>
                                            <a href="#">샴페인·스파클링</a>
                                            <a href="#">스위트와인</a>
                                            <a href="#">위스키·리큐르</a>
                                            <a href="#">논알콜</a>
                                            <a href="#">와인·위스키용품</a>
                                            <a href="#">아티제 픽업</a>
                                            <a href="#">레드텅 와인샵 픽업</a>
                                            <a href="#">와인픽스 와인샵 픽업</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_15_off.png" alt="전통주">
                                        <span>전통주</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="전통주 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">막걸리·탁주</a>
                                            <a href="#">증류주·약주·청주</a>
                                            <a href="#">과실주·리큐르</a>
                                            <a href="#">전통주 선물세트</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_16_off.png" alt="주방용품">
                                        <span>주방용품</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="주방용품 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">일회용품·주방잡화</a>
                                            <a href="#">주방·조리도구</a>
                                            <a href="#">냄비·팬·솥</a>
                                            <a href="#">식기·그릇</a>
                                            <a href="#">컵·잔·물병</a>
                                            <a href="#">밀폐·보관·저장용기</a>
                                            <a href="#">커트러리</a>
                                            <a href="#">주방수납정리</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_17_off.png" alt="생활용품·리빙">
                                        <span>생활용품·리빙</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="생활용품·리빙 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">화장지·물티슈</a>
                                            <a href="#">세제</a>
                                            <a href="#">탈취·제습·방충제</a>
                                            <a href="#">청소용품</a>
                                            <a href="#">욕실용품</a>
                                            <a href="#">세탁용품</a>
                                            <a href="#">수납정리용품</a>
                                            <a href="#">의약외품·마스크</a>
                                            <a href="#">여성·위생용품</a>
                                            <a href="#">패션잡화</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_18_off.png" alt="가전제품">
                                        <span>가전제품</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="가전제품 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">주방가전</a>
                                            <a href="#">생활가전</a>
                                            <a href="#">계절가전</a>
                                            <a href="#">디지털·PC</a>
                                            <a href="#">대형·설치가전</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_19_off.png" alt="가구·인테리어">
                                        <span>가구·인테리어</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="가구·인테리어 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">거실가구</a>
                                            <a href="#">소파·체어</a>
                                            <a href="#">침실가구</a>
                                            <a href="#">주방가구</a>
                                            <a href="#">서재가구</a>
                                            <a href="#">화장대·콘솔</a>
                                            <a href="#">매트리스·토퍼</a>
                                            <a href="#">홈데코</a>
                                            <a href="#">조명·거울</a>
                                            <a href="#">러그·커튼</a>
                                            <a href="#">침구</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_20_off.png" alt="유아동">
                                        <span>유아동</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="유아동 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">분유·간편 이유식</a>
                                            <a href="#">이유식 재료</a>
                                            <a href="#">간식·음식</a>
                                            <a href="#">건강식품</a>
                                            <a href="#">이유·수유용품</a>
                                            <a href="#">기저귀·물티슈</a>
                                            <a href="#">세제·위생용품</a>
                                            <a href="#">스킨·구강케어</a>
                                            <a href="#">완구·잡화류</a>
                                            <a href="#">유아동패션</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_21_off.png" alt="스포츠·레져·캠핑">
                                        <span>스포츠·레져·캠핑</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="스포츠·레져·캠핑 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">골프</a>
                                            <a href="#">구기·라켓</a>
                                            <a href="#">러닝·자전거</a>
                                            <a href="#">시즌스포츠</a>
                                            <a href="#">휘트니스</a>
                                            <a href="#">캠핑</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_22_off.png" alt="반려동물">
                                        <span>반려동물</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="반려동물 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">강아지 간식·영양제</a>
                                            <a href="#">강아지 주식</a>
                                            <a href="#">고양이 간식·영양제</a>
                                            <a href="#">고양이 주식</a>
                                            <a href="#">배변용품</a>
                                            <a href="#">미용·목욕용품</a>
                                            <a href="#">펫 의류·외출용품</a>
                                            <a href="#">급식기·급수기</a>
                                            <a href="#">하우스용품</a>
                                            <a href="#">장난감</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_23_off.png" alt="럭셔리뷰티">
                                        <span>럭셔리뷰티</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="럭셔리뷰티 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">스킨케어</a>
                                            <a href="#">메이크업</a>
                                            <a href="#">바디케어</a>
                                            <a href="#">헤어케어</a>
                                            <a href="#">프레그런스</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_24_off.png" alt="스킨케어·메이크업">
                                        <span>스킨케어·메이크업</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="스킨케어·메이크업 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">스킨·미스트·패드</a>
                                            <a href="#">에센스·앰플·로션</a>
                                            <a href="#">크림·오일</a>
                                            <a href="#">클렌징</a>
                                            <a href="#">마스크팩</a>
                                            <a href="#">선케어</a>
                                            <a href="#">베이스메이크업</a>
                                            <a href="#">립메이크업</a>
                                            <a href="#">아이메이크업</a>
                                            <a href="#">맨즈케어</a>
                                            <a href="#">뷰티소품·기기</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_25_off.png" alt="헤어·바디·구강">
                                        <span>헤어·바디·구강</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="헤어·바디·구강 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                            <a href="#">구강·면도</a>
                                            <a href="#">샴푸·컨디셔너</a>
                                            <a href="#">트리트먼트·팩</a>
                                            <a href="#">헤어에센스·염모</a>
                                            <a href="#">바디워시·스크럽</a>
                                            <a href="#">바디로션·크림</a>
                                            <a href="#">핸드·립·데오</a>
                                            <a href="#">향수·디퓨저</a>
                                            <a href="#">헤어·바디소품</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="left">
                                        <img src="./images/main/icon/category/cate_26_off.png" alt="컬리상품권">
                                        <span>컬리상품권</span>
                                    </div>
                                    <div class="right">
                                        <img src="./images/main/icon/icon_open.svg" alt="컬리상품권 열기">
                                    </div>
                                </a>
                                <div class="lnb_bg">
                                    <div class="lnb_wrap">
                                        <div class="lnb">
                                            <a href="#">전체보기</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div class="kurly_theme">
                                <p>컬리의 추천</p>
                                <div class="lnb">
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_001.png" alt="홈캉스"><span>홈캉스</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_002.jpg" alt="식단관리"><span>식단관리</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_003.jpg" alt="간편한 아침식사"><span>간편한 아침식사</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_004.png" alt="재구매BEST"><span>재구매BEST</span></a>
                                    <a href=""><img src="./images/main/icon/category/cate_kulry_005.png" alt="3천원의 행복"><span>3천원의 행복</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_006.jpg" alt="컬리마트"><span>컬리마트</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_007.png" alt="대용량 상품"><span>대용량 상품</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_008.png" alt="캠핑"><span>캠핑</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_009.jpg" alt="1인가구"><span>1인 가구</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_010.png" alt="비건"><span>비건</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_011.png" alt="베이커리 맛집"><span>베이커리 맛집</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_012.png" alt="오프라인 맛집"><span>오프라인 맛집</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_013.png" alt="컬리가 만든 상품"><span>컬리가 만든 상품</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_014.png" alt="Kulry Only"><span>Kulry Only</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_015.png" alt="KF365 / KS365"><span>KF365 / KS365</span></a>
                                    <a href="#"><img src="./images/main/icon/category/cate_kulry_016.png" alt="희소가치 프로젝트"><span>희소가치 프로젝트</span></a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="user_search">
                <div class="search_header">
                    <h2>검색</h2>
                    <div class="user_icon">
                        <div class="map"> <!-- icon bg 삽입 -->
                            <input type="button" onclick="exec_daum_postcode()" value="" class="map_search_btn">
                        </div>
                        <a href="./cart.html" class="cart"><img src="./images/main/icon/icon_cart_w.png" alt="장바구니 바로가기"></a>
                        <a href="./wish.html" class="wish"><img src="./images/main/icon/icon_wish_w.png" alt="위시리스트 바로가기"></a>
                    </div>
                </div>
                <div class="search_bg">
                    <div class="search_box">
                        <a href="#"><img src="./images/main/icon/icon_search_g.png" alt="검색하기"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해 주세요">
                    </div>
                    <h3>추천 검색어</h3>
                    <div class="tag">
                        <a href="#">블루베리</a>
                        <a href="#">다이어트</a>
                        <a href="#">짬봉</a>
                        <a href="#">닭갈비</a>
                        <a href="#">두유</a>
                        <a href="#">만두</a>
                        <a href="#">시리얼</a>
                        <a href="#">쌀국수</a>
                    </div>
                    <a href="#">
                        <span>급상승 검색어<img src="./images/main/icon/icon_help.png" alt="급상승 겁색어 도움말"></span>
                        <span class="desc">최근 1시간 동안 검색 횟수가 급상승했어요</span>
                    </a>
                    <div class="keyword_open">
                        <span>중복 또는 유사 검색어를 조정하여 반영한 검색어입니다.</span>
                        <a href="#">X</a>
                    </div>
                    <ul>
                        <li><span>1</span>발렌타인</li>
                        <li><span>2</span>고디바</li>
                        <li><span>3</span>삼각김밥</li>
                        <li><span>4</span>초콜릿</li>
                        <li><span>5</span>이연복</li>
                        <li><span>6</span>부침명장</li>
                        <li><span>7</span>페레로</li>
                        <li><span>8</span>목란</li>
                        <li><span>9</span>코코넛오일</li>
                        <li><span>10</span>짬뽕</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script src="./script/header.js"></script>
    <script>
        //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
        function exec_daum_postcode() {
            new daum.Postcode({
                oncomplete: function(data) {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                    // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var roadAddr = data.roadAddress; // 도로명 주소 변수
                    var extraRoadAddr = ''; // 참고 항목 변수

                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraRoadAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraRoadAddr !== ''){
                        extraRoadAddr = ' (' + extraRoadAddr + ')';
                    }

                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    document.getElementById('postcode').value = data.zonecode;
                    document.getElementById("roadAddress").value = roadAddr;
                    document.getElementById("jibunAddress").value = data.jibunAddress;
                    
                    // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
                    if(roadAddr !== ''){
                        document.getElementById("extraAddress").value = extraRoadAddr;
                    } else {
                        document.getElementById("extraAddress").value = '';
                    }

                    var guideTextBox = document.getElementById("guide");
                    // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
                    if(data.autoRoadAddress) {
                        var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                        guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                        guideTextBox.style.display = 'block';

                    } else if(data.autoJibunAddress) {
                        var expJibunAddr = data.autoJibunAddress;
                        guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                        guideTextBox.style.display = 'block';
                    } else {
                        guideTextBox.innerHTML = '';
                        guideTextBox.style.display = 'none';
                    }
                }
            }).open();
        }
    </script>
</body>
</html> 