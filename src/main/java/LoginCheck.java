import com.google.cloud.datastore.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class LoginCheck extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/plain");
        response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
        PrintWriter out=response.getWriter();
        String email=request.getParameter("email");
        String password=request.getParameter("password");

        HttpSession session= request.getSession();
        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();//datastore instance

        Query<Entity> loginQuery=Query.newEntityQueryBuilder().setKind("Login").build();
        QueryResults<Entity> loginQueryResults = datastore.run(loginQuery);

        String admin="";
        String adminPassword="";
        while(loginQueryResults.hasNext()) {
            Entity entity = loginQueryResults.next();
            admin = entity.getString("email");
            adminPassword=entity.getString("password");
            if (admin.equals(email)) {
                admin = admin;
                adminPassword=adminPassword;
                break;
            }
        }
        if (admin.equals(email) && adminPassword.equals(password)) {
            session.setAttribute("email", email);
            out.print("Welcome " + admin + "You have logged in Successfully!");
        }
        else{
            out.print("error");
        }

    }
}
