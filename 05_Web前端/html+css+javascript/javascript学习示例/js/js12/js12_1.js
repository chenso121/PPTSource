//�Զ��庯��
function jiSuan(num1,num2,operator){ //�ر�ǿ����������ǰ��Ҫ��var
	var res=0;
	if(operator=="+"){
		res=num1+num2;
	}else if(operator=="-"){
		res=num1-num2;
	}else if(operator=="*"){
		res=num1*num2;
	}else if(operator=="/"){
		res=num1/num2;
	}else if(operator=="%"){
		res=num1%num2;
	}
	return res;//����ֵ
}