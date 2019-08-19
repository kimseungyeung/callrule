package com.rule.test.data;

import lombok.Data;

@Data
public class CustomerData {
    long othermoney; //공단부담금액
    String country; //국가코드
    long my_money;  //본인부담금액
    String accdDate; //사고발생일자
    String HSP_ST_DT; //입원시작일자
    String HSP_END_DT; //입원종료일자
    String CLM_DT;  //청구일자
    long money; //추신보험금
    String SS; //통원여부
    long money1y; //통원의료비지급 누계 1년금액
    String pg_code; //개인단체구분코드
    String code;  //계약변경코드
    String type; //보종구분코드
    String sss;  //부담보여부
    String sdff; //부활일자
    String sss1; //실효일자
    String hsp_code; //병원등급코드
    String h_code;  //진단코드값
    String yn;  //특정질병여부
    String acc_sss; //사고다발 유형구분코드
    String sex;   //성별
    long cancer; //암지급건수
    int age; //연령
    String sub_code; //중분류
    String main_code; //지급항목 대분류
}
