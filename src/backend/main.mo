import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type Enquiry = {
    id : Nat;
    name : Text;
    company : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
    timestamp : Int;
  };

  type Project = {
    title : Text;
    category : Text;
    description : Text;
    imageUrl : Text;
  };

  type Testimonial = {
    clientName : Text;
    company : Text;
    testimonialText : Text;
    rating : Nat;
  };

  var nextEnquiryId = 0;

  let enquiries = Map.empty<Nat, Enquiry>();

  let projects = Map.fromIter<Text, Project>([
    (
      "proj1",
      {
        title = "3D Modeling of Machinery";
        category = "CAD Design";
        description = "Detailed 3D modeling for industrial machinery components.";
        imageUrl = "/images/project1.png";
      },
    ),
    (
      "proj2",
      {
        title = "Prototype Design";
        category = "Prototyping";
        description = "Complete prototype design services for manufacturing.";
        imageUrl = "/images/project2.png";
      },
    ),
  ].values());

  let testimonials = Map.fromIter<Text, Testimonial>([
    (
      "test1",
      {
        clientName = "John Doe";
        company = "Manufacturing Corp";
        testimonialText = "Excellent service and quality designs!";
        rating = 5;
      },
    ),
    (
      "test2",
      {
        clientName = "Jane Smith";
        company = "Tech Innovations";
        testimonialText = "Highly professional team, very satisfied with the work.";
        rating = 4;
      },
    ),
  ].values());

  public shared ({ caller }) func submitEnquiry(name : Text, company : Text, email : Text, phone : Text, serviceType : Text, message : Text) : async Nat {
    let enquiry : Enquiry = {
      id = nextEnquiryId;
      name;
      company;
      email;
      phone;
      serviceType;
      message;
      timestamp = Time.now();
    };

    enquiries.add(nextEnquiryId, enquiry);
    nextEnquiryId += 1;
    enquiry.id;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray();
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray();
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public query ({ caller }) func getEnquiryById(id : Nat) : async Enquiry {
    switch (enquiries.get(id)) {
      case (null) { Runtime.trap("Enquiry with given id does not exist.") };
      case (?enquiry) { enquiry };
    };
  };
};
