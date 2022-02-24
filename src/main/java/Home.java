
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Home extends HttpServlet {
    public void doPost(HttpServletRequest  request, HttpServletResponse response) throws IOException {
        PrintWriter out=response.getWriter();
        response.addHeader("Access-Control-Allow-Origin","http://localhost:3001");
        out.println("Hi welcome from front end POST");
    }
    public void doGet(HttpServletRequest  request, HttpServletResponse response) throws IOException {
        PrintWriter out=response.getWriter();
        response.addHeader("Access-Control-Allow-Origin","http://localhost:3001");
        out.println("Hi welcome from front end END");
    }
}
