import { useMutation, useQuery } from "@tanstack/react-query";

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  clientName: string;
  testimonialText: string;
  company: string;
  rating: bigint;
}

export function useGetAllProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => [],
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetAllTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => [],
    staleTime: 5 * 60 * 1000,
  });
}

export function useSubmitEnquiry() {
  return useMutation({
    mutationFn: async (_data: {
      name: string;
      company: string;
      email: string;
      phone: string;
      serviceType: string;
      message: string;
    }) => {
      // Backend does not yet expose submitEnquiry — form handled client-side
      return { success: true };
    },
  });
}
