/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBConnector {
    public void connectToAndQueryDatabase(String username, String password) throws Exception {
    Class.forName("com.mysql.jdbc.Driver");
    Connection con = DriverManager.getConnection(
                      "jdbc:mysql://localhost:3306/new_schema_vir",
                      username,
                      password);
      

    Statement stmt = (Statement) con.createStatement();
    ResultSet rs= stmt.executeQuery("SELECT nombre, apellido, genero FROM Persona");

    while (rs.next()) {
          String name = rs.getString("nombre");
            String fullname = rs.getString("apellido");
            String gender= rs.getString("genero");
    }
}
}
