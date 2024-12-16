import { z, defineCollection } from "astro:content";

const projectsSchema = z.object({
  title: z.string(),
  authors: z.string().array(),
  date: z.string(),
  description: z.string(),
  image: z.object({
    url: z.string(), // Valida que sea una URL
    alt: z.string(),
  }),
  tecnologias: z.object({
    tec1: z.object({
      name: z.string(),
      img: z.string().optional(), // Imagen opcional
    }),
    tec2: z.object({
      name: z.string(),
      img: z.string().optional(), // Imagen opcional
    }),
    tec3: z.object({
      name: z.string(),
      img: z.string().optional(), // Imagen opcional
    }),
  }),
});

const projectsCollection = defineCollection({ schema: projectsSchema });

export const collections = {
  projects: projectsCollection,
};