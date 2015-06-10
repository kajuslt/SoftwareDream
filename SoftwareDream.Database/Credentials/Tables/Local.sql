CREATE TABLE [Credentials].[Local] (
    [Id]       INT           IDENTITY (1, 1) NOT NULL,
    [UserId]   INT           NULL,
    [Email]    VARCHAR (254) NULL,
    [Password] VARCHAR (10)  NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [Common].[Users] ([Id])
);

