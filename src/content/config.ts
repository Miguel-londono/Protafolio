import { z, defineCollection } from "astro:content";

// Definir el esquema para los proyectos
const projectsSchema = z.object({
  title: z.string(), // Título del proyecto
  authors: z.array(z.string()), // Lista de autores
  date: z.string(), // Fecha del proyecto
  description: z.string(), // Descripción del proyecto
  image: z.object({
    url: z.string(), // URL de la imagen
    alt: z.string(), // Texto alternativo de la imagen
  }),
  tecnologias: z.array( // Lista de tecnologías
    z.object({
      name: z.string(), // Nombre de la tecnología
      img: z.string().optional(), // Imagen opcional de la tecnología
    })
  ),
  deploy: z.string(),
});

// Actualización para el esquema de experiencias
const experienceSchema = z.object({
  company: z.string(),
  position: z.string(),
  date: z.string(),
  description: z.string(),
  achievements: z.array(z.string()), // Cambiado a array
  rols: z.array(z.string()), // Cambiado a array
});

// Definir las colecciones
const projectsCollection = defineCollection({ schema: projectsSchema });
const experiencesCollection = defineCollection({ schema: experienceSchema });

export const collections = {
  projects: projectsCollection, // Colección de proyectos
  experiences: experiencesCollection, // Colección de experiencias
};
