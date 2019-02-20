import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Allocate} from 'src/app//shared/allocate.model';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
formData : Allocate;

textBoxDisabled = true;
isReadOnly: boolean=true;

    grade =[
    {id: 1, name:'grade1'},
    {id: 2, name:'grade2'},
    {id: 3, name:'grade3'},
    {id: 4, name:'grade4'}
      ];
   billable=[
        {id:1,name:'yes'},
        {id:0,name:'No'}
      ]
  programme =[
    {id: 1, name:'programme1'},
    {id: 2, name:'programme2'},
    {id: 3, name:'programme3'},
    {id: 4, name:'programme4'}
      ];
  esaproject =[
    {id: 1, name:'esaproject1'},
    {id: 2, name:'esaproject2'},
    {id: 3, name:'esaproject3'},
    {id: 4, name:'esaproject4'}
      ];
   ratecardrole =[
    {id: 1, name:'ratecardrole1'},
    {id: 2, name:'ratecardrole2'},
    {id: 3, name:'ratecardrole3'},
    {id: 4, name:'ratecardrole4'}
      ];
  status =[
    {id: 1, name:'status1'},
    {id: 2, name:'status2'},
    {id: 3, name:'status3'},
    {id: 4, name:'status4'}
      ];
      

    
  constructor( ) { }

  ngOnInit() {
    this.formData= {
 Cognizant_ID:123456,
 Cognizant_Name:'',
 Cognizant_Grade:0,
 Skill_Sets:'',
 Location:'',
 Cts_Line_Mgr:'',
 ESA_Prj_Name:'',
 Bill_NBill:0,
 Rsrc_Alloc_End_Dt:'',
 VI_End_Dt_Onshore:'',
 VI_Type:'',
 VI_Ext_Posbl_Bynd_Enddt:0,
 VI_Hw_Lng_Can_Ext:'',
 VI_Ext_Posble_Frm_UK:0,
 Resource_Name:'',
 Rate_Card_Role:0,
 Rate_Card_Day_Rate:'',
 On_Off_2017:'',
 Project_Programme:0,
 Portfolio_2017:'',
 Old_SOW:'',
 New_SOW_End_date:'',
 New_SOW:'',
 Billable:0,
 RLG_Account_Y_N:0,
 RLG_StaffID:0,
 CTS_EL:'',
 RLG_ID:0,
 RLG_Email:'',
 RLG_Join_Date:'',
 RLG_Leaving_Date:'',
 RLG_Rprt_Mgr:'',
 Asset_No_Onshore:'',
 VM_No_Offshore:'',
 Comments:'',
 Primary_Skill:'',
 status:''
  }
    
}


toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
  }

onSubmit(form : NgForm){
alert(this.formData.RLG_Account_Y_N +' '+this.formData.Billable);
}
}

