import { z, defineCollection } from "astro:content";

// Definir el esquema para los proyectos
const projectsSchema = z.object({
  title: z.string(),  // Título del proyecto
  authors: z.array(z.string()),  // Lista de autores
  date: z.string(),  // Fecha del proyecto
  description: z.string(),  // Descripción del proyecto
  image: z.object({
    url: z.string(),  // URL de la imagen
    alt: z.string(),  // Texto alternativo de la imagen
  }),
  tecnologias: z.array(  // Lista de tecnologías
    z.object({
      name: z.string(),  // Nombre de la tecnología
      img: z.string().optional(),  // Imagen opcional de la tecnología
    })
  ),
});

// Definir la colección con el esquema
const projectsCollection = defineCollection({ schema: projectsSchema });

export const collections = {
  projects: projectsCollection,  // La colección de proyectos
};
