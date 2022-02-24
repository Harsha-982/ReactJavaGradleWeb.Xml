import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.Configuration;
import org.eclipse.jetty.webapp.WebAppContext;

import java.net.URL;

public class MainServer {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);

        /* for local runs with gradle run
         WebAppContext context = new WebAppContext();
          String basePath="/Users/harsha/Documents/ReactJavaGradleWeb.Xml/src/main/web";
          context.setContextPath("/");

          context.setDescriptor(basePath+"/WEB-INF/web.xml");
          context.setResourceBase(basePath);

         Configuration.ClassList classList=new Configuration.ClassList();
         Configuration.ClassList classList1 =classList.setServerDefault(server);

         classList1.addBefore("org.eclipse.jetty.webapp.WebXmlConfiguration",
                 "org.eclipse.jetty.annotations.AnnotationConfiguration");

         server.setHandler(context);
         server.start();
         server.join();

         */

        WebAppContext context=new WebAppContext();
        context.setContextPath("/");
        URL webDir =
                MainServer.class.getClassLoader().getResource("META-INF/resources");
        context.setResourceBase(webDir.toURI().toString());


        context.setAttribute("org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern",".*/[^/]*jstl.*\\.jar$");

        Configuration.ClassList classlist = Configuration.ClassList.setServerDefault(server);
        classlist.addAfter("org.eclipse.jetty.webapp.FragmentConfiguration", "org.eclipse.jetty.plus.webapp.EnvConfiguration", "org.eclipse.jetty.plus.webapp.PlusConfiguration");

        classlist.addBefore("org.eclipse.jetty.webapp.JettyWebXmlConfiguration", "org.eclipse.jetty.annotations.AnnotationConfiguration");
        server.setHandler(context);

        server.start();
        server.join();
    }
}
