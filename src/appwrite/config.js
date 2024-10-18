import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {

  client = new Client()
  databases;
  buckets;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)

    this.databases = new Databases(this.client)
    this.buckets = new Storage(this.client)
  }

  async createPost({ title, slug, content, status, image, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          image,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          image,
          status
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true
    } catch (error) {
      console.log(error);
      return false
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log(error);
      return false
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )
    } catch (error) {
      console.log(error);
      return false
    }
  }

  // file upload services

  async uploadFile(file) {
    try {
      return await this.buckets.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log(error);
      return false
    }
  }

  async deleteFile(fileId) {
    try {
      await this.buckets.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true
    } catch (error) {
      console.log(error);
      return false
    }
  }

  filePreview(fileId) {
    return this.buckets.getFilePreview(
      conf.appwriteBucketId,
      fileId,
    )
  }
}

const service = new Service()
export default service