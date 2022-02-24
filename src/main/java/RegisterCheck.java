import com.google.cloud.datastore.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class RegisterCheck extends HttpServlet {
    static int count=0;
    public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
        PrintWriter out = response.getWriter();
        String newEmail = request.getParameter("email");
        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

        String admin = "";
        Query<Entity> registerQuery = Query.newEntityQueryBuilder().setKind("Login").build();
        QueryResults<Entity> registerQueryResults = datastore.run(registerQuery);
        while (registerQueryResults.hasNext()) {
            Entity entity = registerQueryResults.next();
            admin = entity.getString("email");
            if(newEmail.equals(admin)){
                admin=admin;
                break;
            }
        }
        if(!newEmail.equals(admin)){
            out.print("uerror");
        }
        out.print("");
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text/plain");
        response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
        String newEmail = request.getParameter("email");
        String password = request.getParameter("password");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String confirmPassword =request.getParameter("confirmPassword");

        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession(); // session

        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();//datastore instance

        KeyFactory keyFactory= datastore.newKeyFactory().setKind("Login");

        Query<Entity> registerQuery = Query.newEntityQueryBuilder().setKind("Login").build();
        QueryResults<Entity> registerQueryResults = datastore.run(registerQuery);

        String admin = "";
        while (registerQueryResults.hasNext()) {
            Entity entity = registerQueryResults.next();
            admin = entity.getString("email");
            count=count+1;
            if(newEmail.equals(admin)){
                admin=admin;
                break;
            }
        }
        if(newEmail.equals(admin)){
            out.print("uerror");
        }

        else{
            if(password.equals(confirmPassword))
               {
                   FullEntity messageEntity = Entity.newBuilder(keyFactory.newKey(++count))
                        .set("email",newEmail)
                        .set("password",password)
                        .set("firstName",firstName)
                        .set("lastName",lastName)
                        .build();
                datastore.put(messageEntity);
    //            datastore.delete(keyFactory.newKey(0));
                session.setAttribute("email",newEmail);
                out.print("SUCCESS");
               }
            else{
                out.print("perror");
            }
        }

    }
}
