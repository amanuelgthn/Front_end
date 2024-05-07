#!/usr/bin/node
export default function simplepromise(success) {
    return new Promise((resolve, reject) => {
        if (success === 10) {
            resolve(success);
        }