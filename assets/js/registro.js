function validacion() 
        {
            valor = document.getElementById("firstName").value;
            
            if( valor == null || valor.length == 0)
            {
                
                document.getElementById('alerta').innerHTML ="completar nombre";
                elemento = document.getElementById('firstName');
                elemento.focus();
                
                return false;
            }
            
            return true;          
        }     