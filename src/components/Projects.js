import "../styles/Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-section">
        <div className="project-card">
          <h3>Course Recommendation System </h3>
          <div className="project-content">
            In this project of mine I have developed a Course Recommendation
            System that recommends courses based on user's input. This
            recommender system uses K-means and text vectorization to recommend
            courses. The backend was handled by flask server and the GUI is
            developed using Flutter framework.
          </div>
        </div>
        <div className="project-card">
          <h3> Farm Management System Integrated with ML and Data Science </h3>
          <div className="project-content">
            This project delves into the idea of integrating Machine Learning
            and Data Science with Agriculture. As a part of this project we as
            team developed a website that has a Crop Recommendation Module,
            Chatbot Module, Community Module and a Price Analysis Module. The
            project was developed using the django framework of python. The
            algorithms and tools used in this project are
            DecisionTreeClassifier, NLTK, PorterStemmer.
          </div>
        </div>
        <div className="project-card">
          <h3> Banking App</h3>
          <div className="project-content">
            This project involves developing a comprehensive banking application
            that allows both customers and administrators to manage various
            banking operations seamlessly. The application is built using Java,
            JSP, JDBC, and Java Servlets, with the integration of PDF generation
            for transaction reports using iText.
          </div>
        </div>
        <div className="project-card">
          <h3> Employee Time Tracker. </h3>
          <div className="project-content">
            I developed a web-based Employee Time Tracker application using
            Java, JSP, JDBC, and MySQL to manage and monitor employee tasks and
            working hours. The application includes features such as task
            management, where employees can log their daily tasks with
            validation to prevent overlapping entries. Additionally, the system
            implements role-based access control (RBAC), providing secure login
            and task management capabilities for both Admins and Associates. The
            project demonstrates efficient database interaction through JDBC for
            task CRUD operations, with a focus on optimal resource management
            and performance.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
