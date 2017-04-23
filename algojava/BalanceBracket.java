import java.util.Stack;

public class BalanceBracket {

    public static void main(String[] args){

        // Test case 
        int r1 = checkBalanced("{}[(])");

        System.out.println("Expected -1 : Result is "+r1);

        int r2 = checkBalanced("{}[]()");

        System.out.println("Expected 0 : Result is "+r2);

    }

    /// return zero if balanced , -1 if not
    public static int checkBalanced(String str){
        Stack<Character> st = new Stack<Character>();

        int returnVal = -2;
        for(int i=0;i<str.length();i++){
            Character ch = str.charAt(i);

            if('['==ch || '{'==ch || '('==ch){
                st.push(ch);
            }

            if(']'==ch || '}'==ch || ')'==ch){
                Character lastChar = 0 ;
                if(!st.empty()){
                    lastChar = st.pop();
                }
                if(']'==ch && lastChar !='['){
                    return -1;
                }else if('}'==ch && lastChar !='{'){
                    return -1;
                } else if(')'==ch && lastChar !='('){
                    return -1;
                }
                
            }

        }

        if(st.empty()){
            returnVal =0;
        }else {
            returnVal = -1;
        }

        return returnVal;

    }
}