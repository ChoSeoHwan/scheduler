interface Instance {
    [namespace: string]: LocalStorage;
}

class LocalStorage {
    protected static instance: Instance = {};
    protected namespace: string = null;

    constructor(namespace: string) {
        if (!LocalStorage.instance[namespace]) {
            this.setNamespace(namespace);
            LocalStorage.instance[namespace] = this;
            return this;
        }

        return LocalStorage.instance[namespace];
    }

    public setNamespace(namespace: string): void {
        this.namespace = namespace;
    }

    public getItem(key: string): any {
        localStorage.getItem(this.getKey(key));
    }

    public setItem(key: string, value: any): void {
        localStorage.setItem(this.getKey(key), value);
    }

    private getKey(key: string): string {
        return this.namespace + ':' + key;
    }
}

export default LocalStorage;
