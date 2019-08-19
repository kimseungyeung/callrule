package com.rule.test.data;

import lombok.Data;

@Data
public class ClaimData {
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
}
