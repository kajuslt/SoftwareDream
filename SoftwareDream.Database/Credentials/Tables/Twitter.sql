CREATE TABLE [Credentials].[Twitter] (
    [Id]                 INT           IDENTITY (3000000, 1) NOT NULL,
    [UserId]             INT           NULL,
    [TwitterUserId]      VARCHAR (255) NULL,
    [TwitterAccessToken] VARCHAR (255) NULL,
    [TwitterDisplayName] VARCHAR (100) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [Common].[Users] ([Id])
);

