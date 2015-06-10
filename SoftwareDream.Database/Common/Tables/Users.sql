CREATE TABLE [Common].[Users] (
    [Id]                INT      IDENTITY (100000, 4) NOT NULL,
    [CredentialsTypeId] SMALLINT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([CredentialsTypeId]) REFERENCES [Classifications].[CredentialsType] ([Id])
);

