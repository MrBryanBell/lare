/* eslint-disable */
import { db } from '$lib/firebase/config/firebase-config';
import type { Firestore } from 'firebase/firestore/lite';
import { collection, doc, getDoc } from 'firebase/firestore/lite';

class FirestoreService {
	private static readonly db: Firestore = db;

	static async getDocument<T>(collectionName: string, documentName: string): Promise<T> {
		const docRefence = doc(this.db, collectionName, documentName);
		const docSnapshot = await getDoc(docRefence);
		const data = docSnapshot.data();
		return data as T;
	}
}

class FirestoreServiceNull {
	static async getCollection<T>(collection: string): Promise<T[]> {
		const collectionRef = db.collection(collection);
		const snapshot = await collectionRef.get();
		const data = snapshot.docs.map((doc) => doc.data());
		return data as T[];
	}
	static async getDocument<T>(collection: string, document: string): Promise<T> {
		const documentRef = db.collection(collection).doc(document);
		const snapshot = await documentRef.get();
		const data = snapshot.data();
		return data as T;
	}
	static async setDocument<T>(collection: string, document: string, data: T): Promise<void> {
		const documentRef = db.collection(collection).doc(document);
		await documentRef.set(data);
	}
	static async updateDocument<T>(collection: string, document: string, data: T): Promise<void> {
		const documentRef = db.collection(collection).doc(document);
		await documentRef.update(data);
	}

	static async deleteDocument(collection: string, document: string): Promise<void> {
		const documentRef = db.collection(collection).doc(document);
		await documentRef.delete();
	}

	static async getCollectionByField<T>(
		collection: string,
		field: string,
		value: string,
	): Promise<T[]> {
		const collectionRef = db.collection(collection).where(field, '==', value);
		const snapshot = await collectionRef.get();
		const data = snapshot.docs.map((doc) => doc.data());
		return data as T[];
	}

	static async getDocumentByField<T>(collection: string, field: string, value: string): Promise<T> {
		const documentRef = db.collection(collection).where(field, '==', value).limit(1);
		const snapshot = await documentRef.get();
		const data = snapshot.data();
		return data as T;
	}

	static async getCollectionByFields<T>(
		collection: string,
		fields: { [key: string]: string },
	): Promise<T[]> {
		const collectionRef = db.collection(collection);
		const query = Object.keys(fields).reduce(
			(query, key) => query.where(key, '==', fields[key]),
			collectionRef,
		);
		const snapshot = await query.get();
		const data = snapshot.docs.map((doc) => doc.data());
		return data as T[];
	}

	static async getDocumentByFields<T>(
		collection: string,
		fields: { [key: string]: string },
	): Promise<T> {
		const documentRef = db.collection(collection);
		const query = Object.keys(fields).reduce(
			(query, key) => query.where(key, '==', fields[key]),
			documentRef,
		);
		const snapshot = await query.limit(1).get();
		const data = snapshot.data();
		return data as T;
	}

	static async getCollectionByFieldsAndOrderBy<T>(
		collection: string,
		fields: { [key: string]: string },
		orderBy: string,
		order: 'asc' | 'desc',
	): Promise<T[]> {
		const collectionRef = db.collection(collection);
		const query = Object.keys(fields).reduce(
			(query, key) => query.where(key, '==', fields[key]),
			collectionRef,
		);
		const snapshot = await query.orderBy(orderBy, order).get();
		const data = snapshot.docs.map((doc) => doc.data());
		return data as T[];
	}

	static async getDocumentByFieldsAndOrderBy<T>(
		collection: string,
		fields: { [key: string]: string },
		orderBy: string,
		order: 'asc' | 'desc',
	): Promise<T> {
		const documentRef = db.collection(collection);
		const query = Object.keys(fields).reduce(
			(query, key) => query.where(key, '==', fields[key]),
			documentRef,
		);
		const snapshot = await query.orderBy(orderBy, order).limit(1).get();
		const data = snapshot.data();
		return data as T;
	}

	static async getCollectionByFieldsAndOrderByLimit<T>(
		collection: string,
		fields: { [key: string]: string },
		orderBy: string,
		order: 'asc' | 'desc',
		limit: number,
	): Promise<T[]> {
		const collectionRef = db.collection(collection);
		const query = Object.keys(fields).reduce(
			(query, key) => query.where(key, '==', fields[key]),
			collectionRef,
		);
		const snapshot = await query.orderBy(orderBy, order).limit(limit).get();
		const data = snapshot.docs.map((doc) => doc.data());
		return data as T[];
	}
}
