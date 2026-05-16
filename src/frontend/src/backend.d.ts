import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}
export interface Enquiry {
    id: bigint;
    serviceType: string;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface Testimonial {
    clientName: string;
    testimonialText: string;
    company: string;
    rating: bigint;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getAllProjects(): Promise<Array<Project>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getEnquiryById(id: bigint): Promise<Enquiry>;
    submitEnquiry(name: string, company: string, email: string, phone: string, serviceType: string, message: string): Promise<bigint>;
}
